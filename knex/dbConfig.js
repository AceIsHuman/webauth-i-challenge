const env = process.env.ENVIRONMENT || 'development';
const config = require('../knexfile.js')[env];
module.exports = require('knex')(config);