require('dotenv').config({ path: '../../.env' });

const host = process.env.PGHOST;
const user = process.env.PGUSER;
const database = process.env.PGDATABASE;
const password = process.env.PGPASSWORD;
console.log(user);
module.exports = {
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
