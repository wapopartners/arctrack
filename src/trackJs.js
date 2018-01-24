export default function (cb) {
  return function decorate(target, name, descriptor) {
    const oldValue = descriptor.value;
    // eslint-disable-next-line no-param-reassign
    descriptor.value = function (...args) {
      try {
        cb(this, args);
      } catch (err) {
        console.error(err);
      }
      return oldValue.apply(this, args);
    };
    return descriptor;
  };
}

