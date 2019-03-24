"use strict";

var _db = _interopRequireDefault(require("./db"));

var _queries = require("./db/queries");

var _manipulation = require("./db/manipulation");

var _logger = require("./utils/logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var io = require('socket.io')();

var uuid = require('uuid/v1');

module.exports = function socketApi(_ref) {
  var httpServer = _ref.httpServer;
  io.on('connection', function (socket) {
    socket.on('chatTestListener', function (msg) {
      console.log('socket is subscribing to chatTestListener '); // emit only for who started it
      // socket.emit(emitName, `Hello ${interval}, now is ${new Date().toString()}`);
      // emit for all except who started it
      // socket.broadcast.emit('users_count', clients);
      // emit for all

      io.sockets.emit('chatTestEmit', "Hello ".concat(msg, ", now is ").concat(new Date().toString()));
    });
    socket.on('chatListener',
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(msg) {
        var posts;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _logger.log)('saving messages to channel');
                _context.prev = 1;
                _context.next = 4;
                return (0, _manipulation.saveMessageToChannel)(msg);

              case 4:
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);
                // log('error');
                console.log(_context.t0);

              case 9:
                // const msgsOfChannel = await getNodesByChannel(msg.channel);
                (0, _logger.log)('getting postsbychannel', msg);
                _context.next = 12;
                return (0, _queries.getPostsByChannel)(msg.channel);

              case 12:
                posts = _context.sent;
                // io.sockets.emit("chatServer", { id: uuid(), userName: msg.userName, text: msg.text });
                io.sockets.emit('chatServer', {
                  id: uuid(),
                  posts: posts
                }); // io.sockets.emit("chatServer", { id: uuid(), ...{ msgsOfChannel } });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 6]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
  io.listen(httpServer);
};
//# sourceMappingURL=socketApi.js.map