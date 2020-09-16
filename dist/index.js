"use strict";

var _express = _interopRequireDefault(require("express"));

var _routes = require("./routes/routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_routes.router);
var port = process.env.PORT || 4200;
app.listen(port, function (data) {
  console.log("Server on http://localhost:".concat(port));
  return "Francisco Inoque";
});
//# sourceMappingURL=index.js.map