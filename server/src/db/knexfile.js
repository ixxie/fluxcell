const host = process.env.PGHOST;
const user = process.env.PGUSER;
const database = process.env.PGDATABASE;
const password = process.env.PGPASSWORD;

const config = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      user,
      password,
      database,
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      host,
      user,
      password,
      database,
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};

export default config;
