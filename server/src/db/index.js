import 'dotenv/config';
import { log } from '../utils/logger';
import { initDB } from './initDB';

class DB {
  constructor() {
    try {
      initDB();
    } catch (err) {
      log('database login failed', err);
    }
  }

  getInstance() {
    return this.db;
  }

  createCollection(name) {
    return this.db.collection(name).create();
  }

  truncateCollection(name) {
    return this.db.collection(name).truncate();
  }

  truncateEdgeCollection(name) {
    return this.db.edgeCollection(name).truncate();
  }

  createEdgeCollection(name) {
    return this.db.edgeCollection(name).create();
  }

  insertIntoCollection(name, data) {
    log('insertintocollection', name, data);
    const collection = this.db.collection(name);
    return collection.save({ ...data, created: new Date() });
  }

  removeFromCollection(name, id) {
    const collection = this.db.collection(name);
    log('removing user', name, id);
    return collection.remove(id);
  }

  async query(query) {
    const cursor = await this.db.query(query);
    return cursor.all();
  }

  insertIntoEdges(name, data) {
    const collection = this.db.edgeCollection(name);
    return collection.save({ ...data, created: new Date() });
  }
}
const db = new DB();

export default db;
