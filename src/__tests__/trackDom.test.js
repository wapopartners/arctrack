import trackDom from '../trackDom';

jest.mock('../util/mineType');

describe('trackDom', () => {
  window.testPageData = { property1: 'foo' };
  const opts = {
    dataAttr: 'data-test',
    click: jest.fn(),
    scroll: jest.fn(),
  };
  document.body.innerHTML = '<a data-test="someClick"></a>';

  beforeAll(() => {
    trackDom(opts);
    window.dispatchEvent(new Event('load'));
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
  //   window.dispatchEvent(new Event('scroll'));
  //   const { calls } = opts.scroll.mock;
  //   expect(calls.length).toBeGreaterThan(0);
  // });
});
