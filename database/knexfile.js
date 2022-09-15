// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 export default {

  development: {
    client: 'pg',
    connection: {
      database: 'mfit',
      user: 'postgres',
      password: 'docker',
      port: 5432,
      host: '127.0.0.1',
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'mFIT',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'mFIT',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
