import { Model } from 'objection';
import { getLocalTime } from '../../utils/helper.js';

export default class Message extends Model {
  static get tableName() {
    return 'message';
  }

  $beforeInsert() {
    this.created = getLocalTime();
  }
  $beforeUpdate() {
    this.updated = getLocalTime();
  }
}
