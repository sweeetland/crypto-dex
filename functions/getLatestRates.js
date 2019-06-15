"use strict"
const { Rate } = require("../config/db")

exports.getLatestRates = async (req, res) => {
	try {
		// TODO: Add query params to limit results
		const rates = await Rate.findAll()
		console.log("Reponse from db: ", rates)
		return res.status(200).send(rates)
	} catch (err) {
		console.log("Error querying the DB: ", err)
		return res.status(500).send("Error querying the DB.")
	}
}
