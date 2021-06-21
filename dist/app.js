"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.port = exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _routes = require("./routes/routes");

var _db = require("./db/db.mongoose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
exports.app = app;
app.use(_express["default"].json());
app.use((0, _morgan["default"])('dev'));
app.use('/api', _routes.router);
(0, _db.connection)();
var port = process.env.PORT || 4200;
exports.port = port;
//# sourceMappingURL=app.js.map