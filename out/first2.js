"use strict";

var a = 1;
var f = function f() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return r;
};
