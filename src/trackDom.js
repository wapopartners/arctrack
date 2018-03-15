import store from './Store';
import generateTrackClick from './util/generateTrackClick';
import delegateEvent from './util/delegateEvent';
import generateTrackScroll from './util/generateTrackScroll';

export default function (opts) {
  const dataAttr = opts.dataAttr || 'data-arctrack';
  window.onload = function initTrackDom() {
    if (opts.public) {
      store.set({
        name: 'pageData',
        location: (typeof opts.public === 'string') ? opts.public : null,
        value: (typeof opts.public === 'object') ? opts.public : null,
      });

      if (opts.init) {
        opts.init(store.pageData);
      }

      if (opts.click) {
        const trackClick = generateTrackClick({
          cb: opts.click,
          pageData: store.pageData,
          dataAttr,
        });
        delegateEvent('click', trackClick, `[${dataAttr}]`);
      }

      if (opts.scroll) {
        const trackScroll = generateTrackScroll(opts.scroll)(store.pageData);
        window.onscroll = trackScroll;
      }
    }
  };
}
