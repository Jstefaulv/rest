"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProduct = exports.findOneProduct = exports.findAll = exports.deleteProduct = exports.createProducts = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Products = _interopRequireDefault(require("../models/Products"));
var _getPagination2 = require("../libs/getPagination");
//OBTENER TODOS LOS PRODUCTOS
var findAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$query, size, page, nombre, condition, _getPagination, limit, offset, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log(req.query);
            _req$query = req.query, size = _req$query.size, page = _req$query.page, nombre = _req$query.nombre;
            condition = nombre ? {
              nombre: {
                $regex: new RegExp(nombre),
                $options: "i"
              }
            } : {};
            _getPagination = (0, _getPagination2.getPagination)(page, size), limit = _getPagination.limit, offset = _getPagination.offset;
            _context.next = 7;
            return _Products["default"].paginate(condition, {}, {
              offset: offset,
              limit: limit
            });
          case 7:
            data = _context.sent;
            res.json({
              totalItems: data.totalDocs,
              products: data.docs,
              totalPages: data.totalPages,
              currentPage: data.page - 1
            });
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: _context.t0.message || 'something goes wrong retrieving Products :('
            });
          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function findAll(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//CREAR UN PRODUCTO
exports.findAll = findAll;
var createProducts = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var newProduct, productSaved;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!req.body.nombre || !req.body.categoria || !req.body.precio)) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return", res.status(400).send({
              message: ' Content cannot be empty'
            }));
          case 2:
            _context2.prev = 2;
            newProduct = new _Products["default"]({
              nombre: req.body.nombre,
              categoria: req.body.categoria,
              precio: req.body.precio
            });
            _context2.next = 6;
            return newProduct.save();
          case 6:
            productSaved = _context2.sent;
            res.json(productSaved);
            _context2.next = 13;
            break;
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](2);
            res.status(500).json({
              message: _context2.t0.message || 'something goes wrong creating a Product :('
            });
          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 10]]);
  }));
  return function createProducts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//OBTENER UN PRODUCTO
exports.createProducts = createProducts;
var findOneProduct = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, prod;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Products["default"].findById(id);
          case 4:
            prod = _context3.sent;
            if (prod) {
              _context3.next = 7;
              break;
            }
            return _context3.abrupt("return", res.status(404).json({
              message: "Product with id ".concat(id, " does not exists")
            }));
          case 7:
            res.json(prod);

            //throw new Error('custom Error');
            _context3.next = 13;
            break;
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            res.status(500).json({
              message: _context3.t0.message || 'something goes wrong retrieving a Product :('
            });
          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 10]]);
  }));
  return function findOneProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//ELIMINAR PRODUCTO
exports.findOneProduct = findOneProduct;
var deleteProduct = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Products["default"].findByIdAndDelete(req.params.id);
          case 3:
            res.json({
              message: "Product were deleted successfully"
            });
            _context4.next = 9;
            break;
          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              message: _context4.t0.message || "Cannot delete product with id:".concat(id)
            });
          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));
  return function deleteProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//ACTUALIZAR PRODUCTO
exports.deleteProduct = deleteProduct;
var updateProduct = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var update;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _Products["default"].findByIdAndUpdate(req.params.id, req.body);
          case 3:
            update = _context5.sent;
            res.json({
              message: 'Product updated successfully '
            });
            _context5.next = 10;
            break;
          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function updateProduct(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.updateProduct = updateProduct;