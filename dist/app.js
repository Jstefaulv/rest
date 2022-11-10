"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _product = _interopRequireDefault(require("./routes/product.routes"));
var app = (0, _express["default"])();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));

//routes
//app.get('/',(req,res) =>{
//});

app.use('/', _product["default"]);
var _default = app;
exports["default"] = _default;