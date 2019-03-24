"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("dotenv/config");

var _arangojs = require("arangojs");

var _logger = require("../utils/logger");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DB =
/*#__PURE__*/
function () {
  function DB() {
    _classCallCheck(this, DB);

    try {
      (0, _logger.log)('initializing database');
      (0, _logger.log)('env', process.env.NODE_ENV);
      (0, _logger.log)('databaseurl_prod', process.env.DATABASE_URL_PROD);
      (0, _logger.log)('databaseurl_dev', process.env.DATABASE_URL_DEV);
      this.db = new _arangojs.Database({
        url: process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL_PROD : process.env.DATABASE_URL_DEV
      });
      this.db.useDatabase('fluxgraph');
      this.db.useBasicAuth('root', process.env.DATABASE_PASSWORD_ROOT); // this.db.useBasicAuth("root", process.env.DATABASE_PASSWORD_ROOT);
    } catch (err) {
      (0, _logger.log)('database login failed', err);
    }
  }

  _createClass(DB, [{
    key: "getInstance",
    value: function getInstance() {
      return this.db;
    }
  }, {
    key: "createCollection",
    value: function createCollection(name) {
      return this.db.collection(name).create();
    }
  }, {
    key: "truncateCollection",
    value: function truncateCollection(name) {
      return this.db.collection(name).truncate();
    }
  }, {
    key: "truncateEdgeCollection",
    value: function truncateEdgeCollection(name) {
      return this.db.edgeCollection(name).truncate();
    }
  }, {
    key: "createEdgeCollection",
    value: function createEdgeCollection(name) {
      return this.db.edgeCollection(name).create();
    }
  }, {
    key: "insertIntoCollection",
    value: function insertIntoCollection(name, data) {
      console.log('insertintocollection', name, data);
      var collection = this.db.collection(name);
      return collection.save({
        data: data,
        created: new Date()
      });
    }
  }, {
    key: "query",
    value: function () {
      var _query2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_query) {
        var cursor;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.db.query(_query);

              case 2:
                cursor = _context.sent;
                return _context.abrupt("return", cursor.all());

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function query(_x) {
        return _query2.apply(this, arguments);
      };
    }()
  }, {
    key: "insertIntoEdges",
    value: function insertIntoEdges(name, data) {
      var collection = this.db.edgeCollection(name);
      return collection.save(_objectSpread({}, data, {
        created: new Date()
      }));
    }
  }]);

  return DB;
}();

var db = new DB();
var _default = db;
exports.default = _default;
//# sourceMappingURL=index.js.map