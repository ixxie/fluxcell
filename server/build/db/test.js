"use strict";

require("dotenv/config");

var _arangojs = require("arangojs");

var _index = _interopRequireDefault(require("./index"));

var _queries = require("./queries");

var _logger = require("../utils/logger");

var _manipulation = require("./manipulation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _manipulation.addUser)('Antti');

        case 2:
          _context.next = 4;
          return (0, _manipulation.addUser)('Matan');

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}))();

function truncateCollections() {
  return _truncateCollections.apply(this, arguments);
}

function _truncateCollections() {
  _truncateCollections = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _index.default.truncateCollection('messages');

          case 2:
            _context2.next = 4;
            return _index.default.truncateCollection('channels');

          case 4:
            _context2.next = 6;
            return _index.default.truncateEdgeCollection('belongsToChannel');

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _truncateCollections.apply(this, arguments);
}

function createMessagesToChannelMain() {
  return _createMessagesToChannelMain.apply(this, arguments);
}

function _createMessagesToChannelMain() {
  _createMessagesToChannelMain = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var channel, msg1, msg2, msg3;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _index.default.insertIntoCollection('channels', {
              name: 'main'
            });

          case 2:
            channel = _context3.sent;
            _context3.next = 5;
            return _index.default.insertIntoCollection('messages', {
              userName: 'antti',
              text: 'hello'
            });

          case 5:
            msg1 = _context3.sent;
            _context3.next = 8;
            return _index.default.insertIntoCollection('messages', {
              userName: 'antti',
              text: 'hello!'
            });

          case 8:
            msg2 = _context3.sent;
            _context3.next = 11;
            return _index.default.insertIntoCollection('messages', {
              userName: 'antti',
              text: 'hello!1111!'
            });

          case 11:
            msg3 = _context3.sent;
            _context3.next = 14;
            return _index.default.insertIntoEdges('belongsToChannel', {
              _from: msg1._id,
              _to: channel._id
            });

          case 14:
            _context3.next = 16;
            return _index.default.insertIntoEdges('belongsToChannel', {
              _from: msg2._id,
              _to: channel._id
            });

          case 16:
            _context3.next = 18;
            return _index.default.insertIntoEdges('belongsToChannel', {
              _from: msg3._id,
              _to: channel._id
            });

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _createMessagesToChannelMain.apply(this, arguments);
}

function createMessagesToChannelMyChannel() {
  return _createMessagesToChannelMyChannel.apply(this, arguments);
}

function _createMessagesToChannelMyChannel() {
  _createMessagesToChannelMyChannel = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var channel, msg1, msg2, msg3;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _index.default.insertIntoCollection('channels', {
              name: 'theChannel'
            });

          case 2:
            channel = _context4.sent;
            _context4.next = 5;
            return _index.default.insertIntoCollection('messages', {
              userName: 'matan',
              text: 'foobar'
            });

          case 5:
            msg1 = _context4.sent;
            _context4.next = 8;
            return _index.default.insertIntoCollection('messages', {
              userName: 'matan',
              text: 'yeahyeah'
            });

          case 8:
            msg2 = _context4.sent;
            _context4.next = 11;
            return _index.default.insertIntoCollection('messages', {
              userName: 'matan',
              text: 'ok'
            });

          case 11:
            msg3 = _context4.sent;
            _context4.next = 14;
            return _index.default.insertIntoEdges('belongsToChannel', {
              _from: msg1._id,
              _to: channel._id
            });

          case 14:
            _context4.next = 16;
            return _index.default.insertIntoEdges('belongsToChannel', {
              _from: msg2._id,
              _to: channel._id
            });

          case 16:
            _context4.next = 18;
            return _index.default.insertIntoEdges('belongsToChannel', {
              _from: msg3._id,
              _to: channel._id
            });

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _createMessagesToChannelMyChannel.apply(this, arguments);
}
//# sourceMappingURL=test.js.map