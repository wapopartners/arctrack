import { trackDom } from '../../../../src';

const scrollTracker = function ({ type, target }) {
  const scrollMsg = `\n#################################\nUser scrolled an element of type '${type}' into view!`;
  if (type === 'media-module') {
    console.log(`${scrollMsg}...`, 'but it will not fire again!');
  } else {
    console.log(scrollMsg);
  }
  console.log(`Here's the ${type} scroll event target:\n`, target);
};

const scrollEntries = [];
scrollEntries.push({
  selector: 'page',
  load: scrollTracker,
  type: 'page',
});
scrollEntries.push({
  selector: 'page-on',
  type: 'media-module',
  load: scrollTracker,
  trackOnceOnly: true,
});

window.onload = function () {
  trackDom({ scroll: scrollEntries });
};

