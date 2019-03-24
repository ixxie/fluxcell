"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = log;
exports.success = exports.warning = exports.error = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require("winston"),
    createLogger = _require.createLogger,
    format = _require.format,
    transports = _require.transports;

var error = _chalk.default.bold.red;
exports.error = error;

var warning = _chalk.default.keyword("orange");

exports.warning = warning;
var success = _chalk.default.green;
exports.success = success;
var logger = createLogger({
  transports: [new transports.Console(), new transports.File({
    filename: "log.log"
  })]
});

function log() {
  for (var _len = arguments.length, msg = new Array(_len), _key = 0; _key < _len; _key++) {
    msg[_key] = arguments[_key];
  }

  logger.log({
    level: "info",
    message: msg.join(",")
  });
}
//# sourceMappingURL=logger.js.map