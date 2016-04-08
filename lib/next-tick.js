'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nextTick;
function nextTick(cb) {
  if (typeof setImmediate === 'function') {
    setImmediate(cb);
  } else if (process && process.nextTick) {
    process.nextTick(cb);
  } else {
    setTimeout(cb, 0);
  }
}