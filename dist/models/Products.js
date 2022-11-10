"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));
var productSchema = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  categoria: {
    type: String,
    required: true,
    trim: true
  },
  precio: {
    type: Number,
    required: true
  }
}, {
  versionKey: false,
  timestamps: true
});
productSchema.plugin(_mongoosePaginateV["default"]);
var _default = (0, _mongoose.model)('Products', productSchema);
exports["default"] = _default;