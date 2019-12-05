const db = require('../../knex/dbConfig.js');

module.exports = {
    find,
    insert
};

function find() {
    return db('users');
};