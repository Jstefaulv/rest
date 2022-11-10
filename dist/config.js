"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var _default = {
  mongodbURL: process.env.DB_MONGO || 'mongodb://localhost/products'
};
exports["default"] = _default;