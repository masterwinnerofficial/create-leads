"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = require("express");

var router = (0, _express.Router)();
exports.router = router;
router.get('/', function (req, res) {
  return res.json({
    rout: "Hello brow!"
  });
});
//# sourceMappingURL=routes.js.map