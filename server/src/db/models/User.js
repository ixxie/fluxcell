import { Model } from 'objection';
import { getLocalTime } from '../../utils/helper.js';
import Message from './Message';
import Space from './Space';

export default class User extends Model {
  static get tableName() {
    return 'user';
  }

  static get relationMappings() {
    return {
      message: {
        relation: Model.HasManyRelation,
        modelClass: Message,
        join: {
          from: 'user.id',
          to: 'message.userid',
        },
      },
      space: {
        relation: Model.BelongsToOneRelation,
        modelClass: Space,
        join: {
          from: 'space.id',
          to: 'user.spaceid',
        },
      },
    };
  }
  $beforeInsert() {
    this.created = getLocalTime();
  }
  $beforeUpdate() {
    this.updated = getLocalTime();
  }
}
