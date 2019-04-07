import { Model } from 'objection';
import { getLocalTime } from '../../utils/helper.js';
import Attachment from './Attachment.js';
import User from './User';
import Channel from './Channel';

export default class Message extends Model {
  static get tableName() {
    return 'message';
  }

  static get relationMappings() {
    return {
      channel: {
        relation: Model.BelongsToOneRelation,
        modelClass: Channel,
        join: {
          from: 'channel.id',
          to: 'message.channelid',
        },
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'user.id',
          to: 'message.userid',
        },
      },
      attachment: {
        relation: Model.HasManyRelation,
        modelClass: Attachment,
        join: {
          from: 'message.id',
          to: 'attachment.messageid',
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
