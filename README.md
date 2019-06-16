# Plutus 🚀

A small service that is responsible for retrieving current rates by following pairs BTC/EUR, BTC/USD, BTC/GBP, ETH/EUR, ETH/USD, ETH/GBP and saving data to an SQL database every 5 minutes.

API GET - https://europe-west2-plutus-1.cloudfunctions.net/getRates - ? limit = n (to limit results, default is 100)

This was built with Google Cloud services: Functions, Cloud SQL and Cloud Scheduler. 

### Prerequisites

1. Node: any 10.x version
1. NPM
1. GCP account
1. Gcloud CLI - make sure this is setup with your project

### Installation

1. `npm i` to install dependencies
1. `npm run create-db` to create an postgres instance on Cloud SQL
1. `npm run deploy-saveLatestRates && npm run deploy-getRates` to deploy the functions
1. Create a .env.yml in the root directory for env variables: SQL_USER, SQL_PASSWORD, SQL_DB, INSTANCE_CONNECTION_NAME
1. You will find this info from GCP console
1. Create a table in the DB with: `CREATE TABLE rates (ID UUID PRIMARY KEY, CREATED_AT TIMESTAMP, BTC_USD FLOAT, BTC_EUR FLOAT,
 BTC_GBP FLOAT, ETH_USD FLOAT, ETH_EUR FLOAT, ETH_GBP FLOAT);`
1. Setup cloud scheduler to trigger saveLatestRates via http

🧨
