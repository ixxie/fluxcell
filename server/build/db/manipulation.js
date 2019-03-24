"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveMessageToChannel = saveMessageToChannel;
exports.addUser = addUser;

var _index = _interopRequireDefault(require("./index"));

var _queries = require("./queries");

var _logger = require("../utils/logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function saveMessageToChannel(_x) {
  return _saveMessageToChannel.apply(this, arguments);
}

function _saveMessageToChannel() {
  _saveMessageToChannel = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var text, userName, channel, chan, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            text = _ref.text, userName = _ref.userName, channel = _ref.channel;
            _context.next = 3;
            return createChannelIfNotExists(channel);

          case 3:
            chan = _context.sent;
            _context.next = 6;
            return (0, _queries.getUserByName)(userName);

          case 6:
            user = _context.sent;
            return _context.abrupt("return", _index.default.insertIntoCollection('posts', {
              body: text,
              author: user._key,
              channelKey: chan._key
            }));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _saveMessageToChannel.apply(this, arguments);
}

function addUser(_x2) {
  return _addUser.apply(this, arguments);
}

function _addUser() {
  _addUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(username) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return !(0, _queries.hasUser)(username);

          case 2:
            if (!_context2.sent) {
              _context2.next = 5;
              break;
            }

            console.log('adding user', username);
            return _context2.abrupt("return", _index.default.insertIntoCollection('users', {
              username: username
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _addUser.apply(this, arguments);
}

function createChannelIfNotExists(_x3) {
  return _createChannelIfNotExists.apply(this, arguments);
}

function _createChannelIfNotExists() {
  _createChannelIfNotExists = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(name) {
    var channel;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _queries.getChannelByName)(name);

          case 2:
            channel = _context3.sent;

            if (!(channel === undefined)) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", _index.default.insertIntoCollection('channels', {
              name: name
            }));

          case 5:
            return _context3.abrupt("return", channel);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _createChannelIfNotExists.apply(this, arguments);
}
//# sourceMappingURL=manipulation.js.map