import { store } from './index';

export default function (cb) {
  return function decorate(target, name, descriptor) {
    const oldValue = descriptor.value;
    const value = function (...args) {
      try {
        cb(this, args, store.data);
      } catch (err) {
        console.error(err);
      }
      return oldValue.apply(this, args);
    };
    return { ...descriptor, value };
  };
}

