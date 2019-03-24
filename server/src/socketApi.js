import { log } from './utils/logger';

const io = require('socket.io')();
const uuid = require('uuid/v1');

module.exports = function socketApi({ httpServer }) {
  io.on('connection', (socket) => {
    socket.on('chatTestListener', (msg) => {
      log('socket is subscribing to chatTestListener ');

      // emit only for who started it
      // socket.emit(emitName, `Hello ${interval}, now is ${new Date().toString()}`);

      // emit for all except who started it
      // socket.broadcast.emit('users_count', clients);

      // emit for all
      io.sockets.emit('chatTestEmit', `Hello ${msg}, now is ${new Date().toString()}`);
    });

    socket.on('chatListener', async (msg) => {
      log('saving messages to channel');
      try {
        // await saveMessageToChannel(msg);
      } catch (err) {
        log(err);
      }

      log('getting postsbychannel', msg);
      io.sockets.emit('chatServer', { id: uuid(), username: msg.username, message: msg.text });
    });
  });

  io.listen(httpServer);
};
