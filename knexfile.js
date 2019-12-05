// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './knex/users.db3'
    },
    migrations: {
      directory: './knex/migrations'
    },
    useNullAsDefault: true
  }

};
