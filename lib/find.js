'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAsync = findAsync;

var _nextTick = require('./next-tick');

var _nextTick2 = _interopRequireDefault(_nextTick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findAsync(arr, iterator) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(arr) || !arr.length) {
      return reject();
    }

    var next = 0;
    var iterate = function iterate() {
      iterator(arr[next]).then(function (value) {
        if (value) {
          resolve(next);
        }
        next++;
        next >= arr.length ? resolve(-1) : (0, _nextTick2.default)(iterate);
      }).catch(function (err) {
        reject(err);
      });
    };

    iterate();
  });
};