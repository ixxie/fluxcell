"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChannelByName = getChannelByName;
exports.getPostsByChannel = getPostsByChannel;
exports.hasChannel = hasChannel;
exports.getUserByName = getUserByName;
exports.hasUser = hasUser;

var _index = _interopRequireDefault(require("./index"));

var _arangojs = require("arangojs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      FOR user IN users\n      FILTER user.username == ", "\n      RETURN user\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    FOR p IN posts\n    FILTER p.channelKey == ", "\n    SORT p.created\n    FOR u in users\n        FILTER p.author == u._key\n        RETURN { \"id\": p._id, \"username\": u.username, \"message\": p.body }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      FOR channel IN channels\n      FILTER channel.name == ", "\n      RETURN channel\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getChannelByName(_x) {
  return _getChannelByName.apply(this, arguments);
}

function _getChannelByName() {
  _getChannelByName = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(name) {
    var query, channels;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = (0, _arangojs.aql)(_templateObject(), name);
            _context.next = 3;
            return _index.default.query(query);

          case 3:
            channels = _context.sent;
            return _context.abrupt("return", channels.length > 0 ? channels[0] : undefined);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getChannelByName.apply(this, arguments);
}

function getPostsByChannel(_x2) {
  return _getPostsByChannel.apply(this, arguments);
}

function _getPostsByChannel() {
  _getPostsByChannel = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(channelName) {
    var channel, query;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getChannelByName(channelName);

          case 2:
            channel = _context2.sent;

            if (channel) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", []);

          case 5:
            query = (0, _arangojs.aql)(_templateObject2(), channel._key);
            return _context2.abrupt("return", _index.default.query(query));

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _getPostsByChannel.apply(this, arguments);
}

function hasChannel(_x3) {
  return _hasChannel.apply(this, arguments);
}

function _hasChannel() {
  _hasChannel = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(name) {
    var channels;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getChannelByName(name);

          case 2:
            channels = _context3.sent;
            return _context3.abrupt("return", channels !== undefined);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _hasChannel.apply(this, arguments);
}

function getUserByName(_x4) {
  return _getUserByName.apply(this, arguments);
}

function _getUserByName() {
  _getUserByName = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(name) {
    var query, users;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            query = (0, _arangojs.aql)(_templateObject3(), name);
            _context4.next = 3;
            return _index.default.query(query);

          case 3:
            users = _context4.sent;
            console.log('users', name, users);
            return _context4.abrupt("return", users.length > 0 ? users[0] : undefined);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _getUserByName.apply(this, arguments);
}

function hasUser(_x5) {
  return _hasUser.apply(this, arguments);
}

function _hasUser() {
  _hasUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(username) {
    var user, retval;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return getUserByName(username);

          case 2:
            user = _context5.sent;
            console.log('user', user, username);
            retval = user !== undefined;
            console.log('retval', retval, username);
            return _context5.abrupt("return", retval);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _hasUser.apply(this, arguments);
}
//# sourceMappingURL=queries.js.map