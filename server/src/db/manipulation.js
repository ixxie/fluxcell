import { log } from '../utils/logger';
import Space from './models/Space';
import User from './models/User';
import Message from './models/Message';
import PostedIn from './models/PostedIn';

export async function saveMessageToChannel({ body, username, channel }) {
  log('saving message to channel', body, username, channel);
  const chan = await Space.createIfNotExists(channel);
  const user = await User.addIfNotExists(username);
  const message = new Message(body);
  await message.add({ userId: user._id });

  // return DB.insertIntoCollection('message', { body, author: user._key, channelKey: chan._key });
}
