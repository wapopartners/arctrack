const throttle = require('lodash/throttle');
const generateShouldLoad = require('../util/generateShouldLoad');
// import reduce from 'lodash/reduce'

const DEFAULT_THROTTLE_SPEED = 1000;

class ScrollService {
  constructor(entries, throttleSpeed = DEFAULT_THROTTLE_SPEED) {
    this.entries = entries;
    this.throttleSpeed = throttleSpeed;
    this.testElements = this.testElements.bind(this);
    this.pendingElements = {};
    this.scrolledElements = {};
  }

  activate() {
    this.entries.forEach(entry => {
      this.registerEntry(entry);
      document.querySelectorAll(entry.selector)
        .forEach((node, id) => {
          this.registerElement({ node, type: entry.type, id });
        });
    });
    return throttle(this.testElements, this.throttleSpeed);
  }

  registerEntry({ trackOnceOnly, load, buffer, type }) {
    this.entries[type] = { 
      trackOnceOnly, 
      load, 
      shouldLoad: generateShouldLoad(buffer), 
    };
  }

  registerElement({ node, id, type }) {
    this.pendingElements[id] = {
      target: node,
      type,
    };
  }

  transferElement(key, trackOnceOnly) {
    if (!trackOnceOnly) this.scrolledElements[key] = this.pendingElements[key];
    delete this.pendingElements[key];
  }

  testElements() {
    for (let key in this.pendingElements) {
      const { target, type } = this.pendingElements[key];
      const entry = this.entries[type];
      if (entry.shouldLoad(target)) {
        entry.load({ target, type });
        this.transferElement(key, entry.trackOnceOnly);
      }
    }
  }
}

module.exports = ScrollService;