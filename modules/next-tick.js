export function nextTick(cb) {
  if (typeof setImmediate === 'function') {
    setImmediate(cb);
  } else if (process && process.nextTick) {
    process.nextTick(cb);
  } else {
    setTimeout(cb, 0);
  }
}