import User from './models/User';

export async function addUser({ username, email }) {
  await User.query().insert({
    username,
    email,
  });
}
