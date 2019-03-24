import { aql } from 'arangojs';
import BaseModel from './BaseModel';
import DB from '../index';

export default class Space extends BaseModel {
  constructor(comment) {
    super('space', comment);
  }

  add() {
    return super.add();
  }

  static async getByName(name) {
    const query = aql`
          FOR s IN space
          FILTER s.name == ${name}
          RETURN s
        `;
    const channels = await DB.query(query);
    return channels.length > 0 ? channels[0] : undefined;
  }

  static async getMessagesOfSpace(spaceName) {
    const space = await Space.getByName(spaceName);
    if (!space) {
      return [];
    }

    // CHANGE THIS TO USE EDGES

    const query = aql`
    FOR p IN posts
    FILTER p.channelKey == ${space._key}
    SORT p.created
    FOR u in space
        FILTER p.author == u._key
        RETURN { "id": p._id, "username": u.username, "message": p.body }
    `;

    return DB.query(query);
  }

  static async createIfNotExists(name) {
    const space = await Space.getByName(name);
    if (space === undefined) {
      return DB.insertIntoCollection('space', { name });
    }
    return space;
  }
}
