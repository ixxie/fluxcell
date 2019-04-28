import User from './models/User';
import Space from './models/Space';
import Message from './models/Message';
import Channel from './models/Channel';

export async function createUser({ userName, email, spaceId }) {
  const user = await User.query().insert({
    username: userName,
    email,
    space_id: spaceId,
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
    user_id: userId,
    channel_id: channelId,
  });

  return res;
}

export async function getSpace({ name }) {
  const res = await Space.query().where('name', '=', name);
  return res;
}

export async function getSpaces() {
  const res = await Space.query();
  return res;
}

export async function createSpace({ name }) {
  const res = await Space.query().insert({
    name,
  });

  return res;
}

export async function updateSpace({ id, name }) {
  const res = await Space.query()
    .findById(id)
    .patch({
      name,
    });
  return res;
}

export async function createChannel({ spaceId, title, topic }) {
  const res = await Channel.query().insert({
    space_id: spaceId,
    title,
    topic,
  });

  return res;
}
