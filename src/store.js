import getTarget from './util/getTarget';
import logger from './util/logger';

class Store {
  set({
    name,
    location,
    value,
  }) {
    let val;
    if (location) {
      const loc = location.split('.');
      val = getTarget({
        properties: loc.slice(0, loc.length - 1),
        target: loc.pop(),
      });
    }
    this[name] = val || value;

    if (!this[name]) {
      logger.methodFailed('Store#set', 'must provide either a location or a value');
    }
  }
}

const store = new Store();

export default store;
