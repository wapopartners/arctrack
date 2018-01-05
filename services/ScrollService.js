const throttle = require('lodash/throttle');
const reduce = require('lodash/reduce');
const generateId = require('../util/generateId');
const generateShouldLoad = require('../util/generateShouldLoad');

const DEFAULT_THROTTLE_SPEED = 1000;

class ScrollService {
  constructor(entries, throttleSpeed = DEFAULT_THROTTLE_SPEED) {
    this.entries = entries;
    this.throttleSpeed = throttleSpeed;
    this.testElements = this.testElements.bind(this);
    this.entryTypes = {};
    this.pendingElements = {};
    this.scrolledElements = {};
    this.scrollStatus = {
      lastY: 0,
      direction: 'down',
    };
  }

  activate() {
    this.entries.forEach(entry => {
      this.registerEntry(entry);
      const nodes = document.querySelectorAll(entry.selector);
      for(let i = 0; i < nodes.length; i ++) {
        const node = nodes[i];
        this.registerElement({ node, type: entry.type, id: generateId() });
      }
    });
    return throttle(this.testElements, this.throttleSpeed);
  }

  registerEntry({ trackOnceOnly, load, buffer, type }) {
    this.entryTypes[type] = { 
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
    this.detectScrollDirection();
    for (let key in this.pendingElements) {
      const { target, type } = this.pendingElements[key];
      const entry = this.entryTypes[type];
      if (entry.shouldLoad(target)) {
        entry.load({ target, type });
        this.transferElement(key, entry.trackOnceOnly);
      }
    }
  }

  handleDirectionChange() {
    // if elements that have already been scrolled over should be tracked after
    // a scroll direction change, remove them from 'scrolled elements' and make them 
    // 'pending elements', otherwise, do nothing.
    for(let type in this.entryTypes) {
      const { trackOnceOnly } = this.entryTypes[type];
      if (!trackOnceOnly) {
        Object.assign(
          this.pendingElements,
          this.removeElementsOfType(type, 'scrolledElements'),
        );
      }
    } 
  }
  
  detectScrollDirection() {
    const { pageYOffset: currentY } = window;
    let direction;
    if (currentY >= this.scrollStatus.lastY) {
      direction = 'down';
    } else {
      direction = 'up';
    }

    if (direction !== this.scrollStatus.direction) {
      this.handleDirectionChange();
    }

    this.scrollStatus.direction = direction;
    this.scrollStatus.lastY = currentY;
  }

  removeElementsOfType(type, collection = 'pendingElements') {
    const result = {};
    for(let key in this[collection]) {
      const el = this[collection][key];
      if (el.type === type) {
        result[key] = this[collection][key];
        delete this[collection][key];
      }
    }    
    return result;
  }
}

module.exports = ScrollService;