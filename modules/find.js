import nextTick from './next-tick';

export function findAsync(arr, iterator) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr) || !arr.length) {
      return reject();
    }

    let next = 0;
    let iterate = () => {
      iterator(arr[next]).then(function(value) {
        if (value) {
          resolve(next);
        }
        next++;
        next >= arr.length ? resolve(-1) : nextTick(iterate);
      }).catch((err) => {
        reject(err);
      });
    };

    iterate();
  });
};
