import generateTrackClick from './util/generateTrackClick';
import delegateEvent from './util/delegateEvent';
import generateTrackScroll from './util/generateTrackScroll';

export default function (opts) {
  const dataAttr = opts.dataAttr || 'data-arctrack';
  window.onload = function initTrackDom() {
    if (opts.click) {
      const trackClick = generateTrackClick({
        cb: opts.click,
        dataAttr,
      });
      delegateEvent('click', trackClick, `[${dataAttr}]`);
    }

    if (opts.scroll) {
      const trackScroll = generateTrackScroll(opts.scroll);
      window.onscroll = trackScroll;
    }
  };
}
