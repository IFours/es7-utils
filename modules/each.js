import nextTick from './next-tick';

export function eachAsync(arr, iterator) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr) || !arr.length) {
      return reject();
    }

    let next = 0;
    let iterate = () => {
      iterator(arr[next]).then(function() {
        next++;
        next >= arr.length ? resolve() : nextTick(iterate);
      }).catch((err) => {
        reject(err);
      });
    };

    iterate();
  });
};