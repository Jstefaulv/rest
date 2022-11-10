"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _config = _interopRequireDefault(require("./config"));
(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var db;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _mongoose["default"].connect(_config["default"].mongodbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
        case 2:
          db = _context.sent;
          console.log('Conectado: ', db.connection.name);
        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();