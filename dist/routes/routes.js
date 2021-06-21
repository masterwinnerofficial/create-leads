"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = require("express");

var _createLeads = require("../services/createLeads.service");

var router = (0, _express.Router)();
exports.router = router;
router.post('/create-lead', _createLeads.newLead);
//# sourceMappingURL=routes.js.map