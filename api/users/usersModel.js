const db = require('../../knex/dbConfig.js');

module.exports = {
    find,
    insert
};

function find() {
    return db('users');
};

function insert(user) {
    return db('users').insert(user).then(([id]) => findById(id));
}