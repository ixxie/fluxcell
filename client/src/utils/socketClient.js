import openSocket from 'socket.io-client';

const host = `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}`;
console.log('host', host);
console.log('env', process.env.REACT_APP_ENV);
const socket = openSocket(host);

console.log('socketClient');


function subscribe({ cb, name }) {

  console.log('socketClient.subscribe', name);
  socket.on(name, res => cb(null, res));
}
function emit({ name, msg }) {
  console.log('socketClient.emit', name, msg);
  socket.emit(name, msg);
}
export { subscribe, emit };
