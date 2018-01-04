const logger = require('./util/logger');
const delegateEvent = require('./util/delegateEvent');
const mineType = require('./util/mineType');
const generateShouldLoad = require('./util/generateShouldLoad');
const ScrollService = require('./services/ScrollService');

module.exports = class Arctrack {
  constructor({ name = 'arctrack', opts }) {
    this.dataAttr = `data-${name}`;
    window.onload = () => {
      try {
        this.pageData = window[name];
      } catch (err) {
        logger.defaultError(err);
      }
      this.onPageReady(opts);
    }
  }

  onPageReady(opts) {
    if (opts.clickCb) {
      const onClick = this.trackClick(opts.clickCb);
      delegateEvent('click', onClick, `[${this.dataAttr}]`);
    };

    if (opts.scrollCb) {
      this.trackScroll(opts.scrollCb);
    }
    
    if (opts.initCb) opts.initCb(this.pageData);
  }
  
  trackClick(cb) {
    return ({target}) => {
      const { pageData, dataAttr } = this;
      let type = mineType(target, dataAttr);
      try {
        cb({ type, target, pageData });
      } catch (err){
        logger.callbackFailed('trackClick', err);
      }
    }
  }

  trackScroll(entries) {
    if (Array.isArray(entries)) {
      this.scroller = new ScrollService();
      entries.forEach(entry => {
        const shouldLoad = generateShouldLoad(entry.buffer);
        document.querySelectorAll(entry.selector)
          .forEach((node, i) => {
            this.scroller.addElement({
              shouldLoad,
              load: entry.cb,
              target: node,
              type: entry.type,
              id: i,
            });
          });
      });
      this.scroller.activate();
    } else {
      logger.callbackFailed(
        'trackScroll', 
        'Scroll callbacks must be contained in an array.'
      );
    }
  }
}
