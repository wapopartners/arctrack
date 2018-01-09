const throttle = require('lodash/throttle');
const generateId = require('../util/generateId');
const processEntry = require('../util/processEntry');
const processTarget = require('../util/processTarget');

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
      this.registerEntry(processEntry(entry));
      const nodes = document.querySelectorAll(`[data-${entry.selector}]`);
      const trackOnceOnly = entry.trackOnceOnly ? entry.trackOnceOnly : false;
      for(let i = 0; i < nodes.length; i ++) {
        const node = nodes[i];
        this.registerElement({ 
          node, 
          type: entry.type, 
          trackOnceOnly,
          id: generateId(),
        });
      }
    });
    return pageData => (
      throttle(
        this.testElements.bind(this, pageData), 
        this.throttleSpeed,
      )
    );
  }

  registerEntry({ load, shouldLoad, type, selector }) {
    this.entryTypes[type] = { load, shouldLoad, selector };
  }

  registerElement({ node, id, type, trackOnceOnly }) {
    this.pendingElements[id] = {
      type,
      target: node,
      trackOnceOnly,
    };
  }

  transferElement(key) {
    this.scrolledElements[key] = this.pendingElements[key];
  }

  testElements(pageData) {
    this.detectScrollDirection();
    for (let key in this.pendingElements) {
      const { target, type, trackOnceOnly } = this.pendingElements[key];
      const entry = this.entryTypes[type];
      if (entry.shouldLoad(target, this.scrollStatus.direction)) {
        entry.load({ 
          target: processTarget(target, entry.selector), 
          type,
          pageData,
        });
        if (!trackOnceOnly) this.transferElement(key);
        delete this.pendingElements[key];
      }
    }
  }

  handleDirectionChange() {
    const previouslyScrolled = this.scrolledElements;
    this.scrolledElements = this.removePendingElements();
    Object.assign(this.pendingElements, previouslyScrolled);
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

  removePendingElements() {
    const result = {};
    for(let el in this.pendingElements) {
      result[el] = this.pendingElements[el];
      delete this.pendingElements[el];
    }    
    return result;
  }
}

module.exports = ScrollService;