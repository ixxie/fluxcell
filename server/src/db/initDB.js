import Knex from 'knex';
import { Model } from 'objection';
import knexConfig from './knexfile';

export function initDB() {
  const knex = Knex(process.env.NODE_ENV === 'production' ? knexConfig.production : knexConfig.development);

  Model.knex(knex);
}
