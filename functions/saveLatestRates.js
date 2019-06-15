"use strict"
const axios = require("axios")

exports.saveLatestRates = async (req, res) => {
	let api
	try {
		api = await axios.get(
			"https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR,GBP"
		)
		console.log("Response from API: ", api.data)
		return res.status(200).send(api.data)
	} catch (err) {
		console.log("Error fetching rates from API: ", err)
		return res.status(500).send("Error fetching rates from API.")
	}
}
