require('dotenv').config()

const env = process.env.NODE_ENV || "development"

const knexfile = require('./knexfile')
const db = require('knex')(env)

module.exports = db