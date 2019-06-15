const Sequelize = require("sequelize")

const db = new Sequelize(process.env.SQL_DB, process.env.SQL_USER, process.env.SQL_PASSWORD, {
	host: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
	dialect: "postgres",
	omitNull: true
})

class Rate extends Sequelize.Model {}

Rate.init(
	{
		id: {
			type: Sequelize.UUID,
			primaryKey: true
		},
		btc_usd: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		btc_eur: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		btc_gbp: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		eth_usd: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		eth_eur: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		eth_gbp: {
			type: Sequelize.FLOAT,
			allowNull: false
		}
	},
	{
		sequelize: db,
		modelName: "rates",
		updatedAt: false,
		createdAt: 'created_at'
	}
)

module.exports = { Rate }
