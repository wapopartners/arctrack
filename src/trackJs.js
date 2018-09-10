export default function (cb, eventName) {
  return function decorate(target, name, descriptor) {
    const oldValue = descriptor.value;
    const value = function (...args) {
      try {
        cb({
          methodName: name,
          instance: this,
          eventName,
          args,
        });
      } catch (err) {
        throw new Error(`trackJs: failed with the following error: ${err}`);
      }
      return oldValue.apply(this, args);
    };
    return { ...descriptor, value };
  };
}

