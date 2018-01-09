import Arctrack from '../index';

jest.mock('../util/mineType');

describe('arctrack', () => {
  const opts = {
    initCb: jest.fn(),
    clickCb: jest.fn(),
  }
  window.test = { property1: 'foo' };
  let at1 = new Arctrack({ name: 'test', opts });
  document.body.innerHTML = '<a data-test="someClick"></a>';
  beforeAll(() => {
    window.dispatchEvent(new Event('load'));
  });

  describe('#constructor', () => {
    it('receives analytics data when the page has loaded', () => {
      const { pageData } = at1;
      expect(pageData).not.toBeUndefined();
      expect(pageData.property1).toBe('foo');
    });

    it('executes an init callback when the page has loaded', () => {
      const { calls } = opts.initCb.mock;  
      expect(calls.length).toBe(1);
    });
  });

  describe('#trackClick', () => {
    beforeAll(() => {
      const [link] = document.querySelectorAll('[data-test]');
      link.dispatchEvent(
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        })
      );
    })
    it('delegates a click handler to fire on click event', () => {
      const { calls } = opts.clickCb.mock;
      expect(calls.length).toBe(1);
    });
    it('returns analytics data containing \'type\', \'target\' and \'pageData\'', () => {
      const [call] = opts.clickCb.mock.calls[0];
      expect(call.type).not.toBeUndefined();
      expect(call.target).not.toBeUndefined();
      expect(call.pageData).not.toBeUndefined();
    });
  });
});