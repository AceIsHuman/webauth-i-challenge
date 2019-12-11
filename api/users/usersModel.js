const db = require('../../knex/dbConfig.js');

module.exports = {
    find,
    findBy,
    insert
};

function find() {
    return db('users').select('id', 'user');
};

function findBy(user) {
    return db('users').where(user);
};

function insert(user) {
    return db('users').insert(user).then(([id]) => findBy({ id }));
};