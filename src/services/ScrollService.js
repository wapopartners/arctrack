import throttle from 'lodash.throttle';
import generateId from '../util/generateId';
import processEntry from '../util/processEntry';
import processTarget from '../util/processTarget';

const DEFAULT_THROTTLE_SPEED = 1000;

export default class ScrollService {
  constructor(entries, throttleSpeed = DEFAULT_THROTTLE_SPEED) {
    this.entries = entries;
    this.throttleSpeed = throttleSpeed;
    this.testElements = this.testElements.bind(this);
    this.entryTypes = {};
    this.pendingElements = {};
    this.scrolledElements = {};
    this.scrollStatus = { lastY: 0, direction: 'down' };
  }

  activate() {
    this.entries.forEach((entry) => {
      this.registerEntry(processEntry(entry));
      const nodes = document.querySelectorAll(`[data-${entry.selector}]`);
      const trackOnceOnly = entry.trackOnceOnly ? entry.trackOnceOnly : false;
      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        this.registerElement({
          node,
          type: entry.type,
          trackOnceOnly,
          id: generateId(),
        });
      }
    });
    return (
      throttle(
        this.testElements,
        this.throttleSpeed,
      )
    );
  }

  registerEntry({
    load,
    shouldLoad,
    type,
    selector,
  }) {
    this.entryTypes[type] = {
      load,
      shouldLoad,
      selector,
    };
  }

  registerElement({
    node,
    id,
    type,
    trackOnceOnly,
  }) {
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
    Object.keys(this.pendingElements).forEach((key) => {
      const {
        target,
        type,
        trackOnceOnly,
      } = this.pendingElements[key];
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
    });
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
    Object.keys(this.pendingElements).forEach((key) => {
      result[key] = this.pendingElements[key];
      delete this.pendingElements[key];
    });
    return result;
  }
}

