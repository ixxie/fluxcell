import { aql } from 'arangojs';
import BaseModel from './BaseModel';
import DB from '../index';
import { log } from '../../utils/logger';

export default class User extends BaseModel {
  constructor(username) {
    super('agent', { username });
    this.username = username;
  }

  add() {
    return super.add();
  }

  static async getByUserName(username) {
    const query = aql`
        FOR u IN agent
        FILTER u.username == ${username}
        RETURN u
      `;
    const users = await DB.query(query);
    log('users', name, users);
    return users.length > 0 ? users[0] : undefined;
  }

  static async delete(username) {
    const user = await User.getByUserName(username);

    if (user !== undefined) {
      log('deleting user', user);
      return DB.removeFromCollection('agent', user._id);
    }
  }

  static async addIfNotExists(username) {
    const user = await User.getByUserName(username);
    if (user === undefined) {
      const newuser = super.add();

      return newuser;
    }

    return user;
  }

  static async getMessages(username) {
    const user = await User.getByUserName(username);
    if (!user) return null;

    const query = aql`
      FOR v IN 1..2 INBOUND ${user._id} postedIn
      RETURN v
    `;

    return DB.query(query);
  }

  static async hasUser(username) {
    const user = await User.getByUserName(username);
    log('user', user, username);
    const retval = user !== undefined;
    log('retval', retval, username);
    return retval;
  }
}
