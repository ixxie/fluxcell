import restClient from './restClient';

export function createUser({ name, email }) {
  return restClient
    .post('createUser', { name, email })
    .then(res => console.log(res))
    .catch(err => console.log('err', err));
}
