import 'dotenv/config';
import { log } from '../utils/logger';
import { initDB } from './initDB';
import { addUser } from './helper';

class DB {
  init() {
    try {
      initDB();
      // addUser({ username: 'foo', email: 'bar@bar.com' });
    } catch (err) {
      log('database login failed', err);
    }
  }
}

export default DB;
