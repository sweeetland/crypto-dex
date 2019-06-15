"use strict"
const axios = require("axios")
const uuid = require("uuid")

const { Rate } = require("../config/db")

exports.saveLatestRates = async (req, res) => {
	let api
	try {
		api = await axios.get(
			"https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR,GBP"
		)
		console.log("Response from API: ", api.data)
	} catch (err) {
		console.log("Error fetching rates from API: ", err)
		return res.status(500).send("Error fetching rates from API.")
	}

	try {
		const { BTC, ETH } = api.data
		const id = uuid()
		await Rate.create({
			id,
			btc_usd: BTC.USD,
			btc_eur: BTC.EUR,
			btc_gbp: BTC.GBP,
			eth_usd: ETH.USD,
			eth_eur: ETH.EUR,
			eth_gbp: ETH.GBP
		})
		console.log("Rates saved to DB with ID: ", id)
		return res.status(200).send(api.data)
	} catch (err) {
		console.log("Error saving rates to DB: ", err)
		return res.status(500).send("Error saving rates to DB.")
	}
}
