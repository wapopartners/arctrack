import store from './Store';

export default function (cb) {
  return function decorate(target, name, descriptor) {
    const oldValue = descriptor.value;
    const value = function (...args) {
      try {
        cb({
          target,
          name,
          args,
          pageData: store.pageData,
        });
      } catch (err) {
        throw new Error(`trackJs: failed with the following error: ${err}`);
      }
      return oldValue.apply(this, args);
    };
    return { ...descriptor, value };
  };
}

