import getTarget from './util/getTarget';

class Store {
  set({
    name,
    location,
    value,
  }) {
    // if there's a value, set that as the value of object w/ key 'name'
    if (value) {
      this[name] = value;
    } else {
      const loc =
        (location.indexOf('.') !== -1)
          ? location.split('.')
          : location;

      this[name] =
        (Array.isArray(loc))
          ? getTarget({
            properties: loc.slice(0, loc.length - 1),
            target: loc.pop(),
          })
          : window[loc];
    }

    if (!this[name]) {
      throw new Error('Store#set: must provide either a location string or a value');
    }
  }
}

const store = new Store();

export default store;
