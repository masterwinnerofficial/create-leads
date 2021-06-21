"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeadSchema = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema,
    model = _mongoose["default"].model;
var Lead = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var LeadSchema = model('lead', Lead);
exports.LeadSchema = LeadSchema;
//# sourceMappingURL=leads.js.map