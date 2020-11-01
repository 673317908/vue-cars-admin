"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCity = getCity;

var _request = _interopRequireDefault(require("../utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getCity() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request["default"].request({
    method: "post",
    url: "/cityPicker/",
    data: data
  });
}