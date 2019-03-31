import { Model } from 'objection';
import { getLocalTime } from '../../utils/helper.js';

export default class Space extends Model {
  static get tableName() {
    return 'space';
  }

  $beforeInsert() {
    this.created = getLocalTime();
  }
  $beforeUpdate() {
    this.updated = getLocalTime();
  }
}
