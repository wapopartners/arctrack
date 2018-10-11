import { trackDom } from '../../../../src';

trackDom({
  click({ target, type }) {
    console.log(`firing analytics for '${type}!'`);
    console.log('And here\'s the click target:\n', target);
  },
});

