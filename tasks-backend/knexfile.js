// Update with your config settings.

module.exports = {
    client: 'postgresql',
    connection: {
      database: 'tarefas',
      user:     'postgres',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
