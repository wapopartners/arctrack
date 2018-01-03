const logger = require('./util/logger');
const delegateEvent = require('./util/delegateEvent');
const mineType = require('./util/mineType');

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
    console.log('this test message should log in the console');
    if (opts.clickCb) {
      const onClick = this.trackClick(opts.clickCb);
      delegateEvent('click', onClick, `[${this.dataAttr}]`);
    };
    
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
}
