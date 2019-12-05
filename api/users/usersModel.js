const db = require('../../knex/dbConfig.js');

module.exports = {
    find,
    insert
};

function find() {
    return db('users');
};

function findById(id) {
    return db('users').where({ id });
};

function insert(user) {
    return db('users').insert(user).then(([id]) => findById(id));
};