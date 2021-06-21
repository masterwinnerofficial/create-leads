"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.connection = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var connection = function connection() {
  var url = process.env.MONGODB_URI;

  _mongoose["default"].connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }).then(function () {
    return console.log('Database is connected');
  })["catch"](function () {
    return console.log('Error when I trying to connect to Database');
  });
};

exports.connection = connection;
var _default = _mongoose["default"];
exports["default"] = _default;
//# sourceMappingURL=db.mongoose.js.map