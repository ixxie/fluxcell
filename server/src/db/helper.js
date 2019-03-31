import User from './models/User';
import Space from './models/Space';
import Message from './models/Message';
import Channel from './models/Channel';

export async function createUser({ username, email }) {
  const user = await User.query().insert({
    username,
    email,
  });
  return user;
}

export async function getUser(id) {
  const user = await User.query().findById(id);
  return user;
}

export async function createMessage({ channelId, userId, body }) {
  const res = await Message.query().insert({
    body,
    userId,
    channelId,
  });

  return res;
}

export async function createSpace({ name }) {
  const res = await Space.query().insert({
    name,
  });

  return res;
}

export async function createChannel({ spaceId, title, topic }) {
  const res = await Channel.query().insert({
    spaceId,
    title,
    topic,
  });

  return res;
}
