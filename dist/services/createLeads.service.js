"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newLead = void 0;

var _leads = require("../models/leads");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var newLead = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, first_name, last_name, email, lead, response;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, first_name = _req$body.first_name, last_name = _req$body.last_name, email = _req$body.email;
            _context.prev = 1;
            lead = new _leads.LeadSchema({
              first_name: first_name,
              last_name: last_name,
              email: email
            });
            _context.next = 5;
            return lead.save();

          case 5:
            response = _context.sent;
            _context.next = 8;
            return res.json(response);

          case 8:
            return _context.abrupt("return", _context.sent);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", res.json(_context.t0));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));

  return function newLead(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.newLead = newLead;
//# sourceMappingURL=createLeads.service.js.map