import { Model } from 'objection';
import { getLocalTime } from '../../utils/helper.js';

export default class User extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'user';
  }

  $beforeInsert() {
    this.created = getLocalTime();
  }
  $beforeUpdate() {
    this.updated = getLocalTime();
  }
}
