"use strict"
const { Rate } = require("../config/db")

exports.getRates = async (req, res) => {
	try {
		const limit = req.query.limit || "100"
		const rates = await Rate.findAll({
			limit,
			attributes: ["btc_usd", "btc_eur", "btc_gbp", "eth_usd", "eth_eur", "eth_gbp", "created_at"]
		})
		console.log("Reponse from db: ", rates)
		return res.status(200).send(rates)
	} catch (err) {
		console.log("Error querying the DB: ", err)
		return res.status(500).send("Error querying the DB.")
	}
}
