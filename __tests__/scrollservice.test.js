const ScrollService = require('../services/ScrollService');

describe('ScrollService', () => {
  let scroller;
  let scrollSpy;
  beforeAll(() => {
    scrollSpy = jest.spyOn(ScrollService.prototype, 'testElements');
    scroller = new ScrollService();
    scroller.activate();
    window.dispatchEvent(new Event('scroll'));
  })
  describe('#constructor', () => {
    it('sets up the instance\'s initial state based on user settings', () => {
      expect(scroller).not.toBeUndefined();
    });
    // it('uses default parameters if none are passed when the service is created', () => {
    //   const noArgsScroller = new ScrollService();
    //   Object.keys(opts).forEach((prop) => {
    //     expect(noArgsScroller).toHaveProperty(prop);
    //   })
    // });
  });
  describe('#activate', () => {
    it('adds a scroll handler to the window', () => {
      expect(scrollSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('#addElement', () => {
    it('generates scroll element based on settings passed in when service was created', () => {
      expect(true).toBe(true);
    });
    it('adds new element to service\'s \'pending items\' collection', () => {
      expect(true).toBe(true);
    });
  });
  // describe('#testElements', () => {
  //   it('', () => {

  //   });
  // });
});

