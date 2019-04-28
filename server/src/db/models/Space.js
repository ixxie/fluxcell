import { Model } from 'objection';
import Channel from './Channel';
import User from './User';
import { getLocalTime } from '../../utils/helper.js';

export default class Space extends Model {
  static get tableName() {
    return 'space';
  }
  static get relationMappings() {
    return {
      channel: {
        relation: Model.HasManyRelation,
        modelClass: Channel,
        join: {
          from: 'space.id',
          to: 'channel.spaceid',
        },
      },
      user: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: 'space.id',
          to: 'user.spaceid',
        },
      },
    };
  }
  $beforeUpdate() {
    this.updated_at = getLocalTime();
  }
  $beforeInsert() {
    this.created_at = getLocalTime();
  }
}
