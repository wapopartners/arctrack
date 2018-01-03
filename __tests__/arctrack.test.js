const Arctrack = require('../index');

describe('arctrack', () => {
  const opts = {
    initCb: jest.fn(),
    clickCb: jest.fn(),
  }
  window.test = { property1: 'foo' };
  let at1 = new Arctrack({ name: 'test', opts });

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
      document.body.innerHTML = '<a data-test="someClick"></a>';
    })
    it('delegates a click handler to fire on click event', () => {
      const [link] = document.querySelectorAll('[data-test]');
      // const event = new Event('click');
      // link.dispatchEvent(event);
      // const { calls } = opts.clickCb.mock;
      // console.log(calls);
      // expect(calls.length).toBe(1);
    });
  });
});