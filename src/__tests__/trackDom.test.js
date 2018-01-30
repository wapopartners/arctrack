import trackDom from '../trackDom';
import store from '../Store';

jest.mock('../util/mineType');

describe('trackDom', () => {
  window.testPageData = { property1: 'foo' };
  const opts = {
    public: window.testPageData,
    dataAttr: 'data-test',
    init: jest.fn(),
    click: jest.fn(),
    scroll: jest.fn(),
  };
  document.body.innerHTML = '<a data-test="someClick"></a>';
  beforeAll(() => {
    trackDom(opts);
    window.dispatchEvent(new Event('load'));
  });

  it('adds pageData to the store if opts.public is present', () => {
    expect(store.pageData).not.toBeUndefined();
    expect(store.pageData).toEqual({ property1: 'foo' });
  });

  it('executes an init callback on load if opts.init is present', () => {
    const { calls } = opts.init.mock;
    expect(calls.length).toBe(1);
  });

  it('executes a click callback on click if opts.click is present', () => {
    const [link] = document.querySelectorAll('[data-test]');
    link.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    }));
    const { calls } = opts.click.mock;
    expect(calls.length).toBe(1);
  });
  // it('executes a scroll callback on scroll if opts.scroll is present', () => {
  //   window.onscroll = function() {
  //     console.error('SCROLLIN!');
  //   }
  //   for (let i = 0; i < 100; i ++) {
  //     window.dispatchEvent(new CustomEvent('scroll'));
  //   }
  //   const { calls } = opts.scroll.mock;
  //   expect(calls.length).toBe(1);
  // });
});
