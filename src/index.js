import logger from './util/logger';
import delegateEvent from './util/delegateEvent';
import mineType from './util/mineType';
import ScrollService from './services/ScrollService';

export default class Arctrack {
  constructor({ name = 'arctrack', opts }) {
    this.dataAttr = `data-${name}`;
    window.onload = () => {
      try {
        this.pageData = window[name];
      } catch (err) {
        logger.defaultError(err);
      }
      this.onPageReady(opts);
    };
  }

  onPageReady(opts) {
    if (opts.clickCb) {
      const onClick = this.trackClick(opts.clickCb);
      delegateEvent('click', onClick, `[${this.dataAttr}]`);
    }

    if (opts.scrollCb) {
      const onScroll = this.trackScroll(opts.scrollCb)(this.pageData);
      window.addEventListener('scroll', onScroll);
    }
    if (opts.initCb) opts.initCb(this.pageData);
  }

  trackClick(cb) {
    return ({ target }) => {
      const { pageData, dataAttr } = this;
      const type = mineType(target, dataAttr);
      try {
        cb({
          type,
          target,
          pageData,
        });
      } catch (err) {
        logger.methodFailed('trackClick', err, cb);
      }
    };
  }

  trackScroll(entries) {
    try {
      const scrollerInput = Array.isArray(entries) ? entries : [entries];
      this.scroller = new ScrollService(scrollerInput);
      return this.scroller.activate();
    } catch (err) {
      logger.methodFailed('trackScroll', err);
    }
  }
}
