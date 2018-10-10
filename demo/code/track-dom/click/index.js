import { trackDom } from '../../../../src';

trackDom({
  click: function({ target, type }) {
    console.log('is this a thing?', target, type);
  }
});

