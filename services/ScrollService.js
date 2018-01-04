const throttle = require('lodash/throttle');
// import reduce from 'lodash/reduce'

const DEFAULT_THROTTLE_INTERVAL = 1000;

class ScrollService {
  constructor({
    selfDestruct = true,
    throttle = true,
    interval = DEFAULT_THROTTLE_INTERVAL,
  } = {}) {
    this.testElements = this.testElements.bind(this);
    this.selfDestruct = selfDestruct;
    this.throttle = throttle;
    this.interval = interval;
    this.pendingElements = {};
  }

  activate() {
    this.scrollListener = throttle(this.testElements, this.interval);
    window.addEventListener('scroll', this.scrollListener);
  }

  addElement({ shouldLoad, load, target, type, id }) {
    if (shouldLoad(target)) {
      load({ target, type })
    } else {
      this.pendingElements[id] = { shouldLoad, load, target, type, id }
    }
  }

  testElements() {
    let pendingElement;
    for (let key in this.pendingElements) {
      pendingElement = this.pendingElements[key];
      const { shouldLoad, target, load, type } = pendingElement;
      if (shouldLoad(target)) {
        pendingElement.load({ target, type });
        // delete this.pendingElements[key];
        // if (this.selfDestruct && !Object.keys(this.pendingObjects).length) {
        //   this.removeScrollListener()
        // }
      }
    }
  }
}

module.exports = ScrollService;