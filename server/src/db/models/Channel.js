import { Model } from 'objection';
import { getLocalTime } from '../../utils/helper.js';

export default class Channel extends Model {
  static get tableName() {
    return 'channel';
  }

  $beforeInsert() {
    this.created = getLocalTime();
  }
  $beforeUpdate() {
    this.updated = getLocalTime();
  }
}
