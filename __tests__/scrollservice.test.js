const ScrollService = require('../services/ScrollService');

jest.mock('../util/generateShouldLoad');

describe('ScrollService', () => {
  let scroller;
  let scroller2;
  let testElementsSpy;
  let querySelectorSpy;
  const entry1 = {
    load: jest.fn(),
    buffer: { top: 5, bottom: 5 },
    selector: '[data-page]',
    trackOnceOnly: false,
    type: 'page',
  };
  const entry2 = {
    load: jest.fn(),
    buffer: { top: 100, bottom: 500 },
    selector: '[data-post]',
    trackOnceOnly: true,
    type: 'post',
  };
  const entryArray1 = [ entry1 ];
  const entryArray2 = [ entry1, entry2 ];

  beforeAll(() => {
    document.body.innerHTML = `
      <p data-page='1'></p>
      <p data-post='1'></p>
    `;
    testElementsSpy = jest.spyOn(ScrollService.prototype, 'testElements');
    querySelectorSpy = jest.spyOn(document, 'querySelectorAll');
  });

  beforeEach(() => {
    scroller = new ScrollService(entryArray1);
  });
  describe('#constructor', () => {
    it('uses default throttle speed when not specified in construction', () => {
      expect(scroller.throttleSpeed).toBe(1000);
    });
    it('has at least one entry after construction', () => {
      expect(scroller.entries).not.toBe({});
    });
  });
  describe('#activate', () => {
    let onScroll;
    beforeAll(() => {
      onScroll = scroller.activate();
    })
    it('returns a scroll handler function', () => {
      expect(typeof onScroll === 'function').toBe(true);
    });
    it('scales the DOM for elements specified in its entry\'s selector', () => {
      expect(querySelectorSpy).toHaveBeenCalledWith(entryArray1[0].selector);
    });
  });
  describe('#registerElement', () => {
    it('adds a scroll element to \'pendingElements\'', () => {
      scroller.registerElement({ node: 'node', id: 'test', type: 'post' });
      expect(scroller.pendingElements['test']).toEqual({target: 'node', type: 'post'});
    });
  });
  describe('#registerEntry', () => {
    it('Adds a new entry object to \'entries\'', () => {
      scroller.registerEntry({ trackOnceOnly: false, load: 'foo', buffer: {}, type: 'test' });
      expect(Object.keys(scroller.entryTypes['test'])).toEqual([ 'trackOnceOnly', 'load', 'shouldLoad' ]);
    });
  });
  describe('#transferElement', () => {
    let elementKey;
    beforeEach(() => {
      scroller.activate();
      for (let key in scroller.pendingElements) {
        elementKey = key;
        scroller.transferElement(key, false);
      }
    })
    it('adds element from \'pendingElements\' to \'scrolledElements\'', () => {
      expect(scroller.scrolledElements[elementKey]).not.toBeUndefined();
    });
    it('removes element from \'scrolledElements\'', () => {
      expect(scroller.pendingElements).toEqual({});
    });
  });
  describe('#testElements', () => {
    let entry;
    beforeAll(() => {
      entry = entryArray1[0];
      scroller.activate();
      scroller.testElements();
    });
    it('fires an entry\'s load function if the element passes its test', () => {
      expect(entry.load).toHaveBeenCalledTimes(1);
    });
  });
  describe('#removeElementsOfType', () => {
    let result;
    let elements;
    beforeEach(() => {
      scroller2 = new ScrollService(entryArray2);
      scroller2.activate();
      elements = scroller2.pendingElements;
    })
    it('removes elements of type specified from \'pendingElements\' by default', () => {
      expect(Object.keys(elements).length).toBe(2);
      scroller2.removeElementsOfType('page');
      expect(Object.keys(elements).length).toBe(1);
    });
    it('returns the removed elements', () => {
      for(let obj in result) {
        const removed = result[obj];
        expect(removed).toHaveProperty('type', 'page');
      }
    });
  });
  describe('#detectScrollDirectionChange', () => {
    let directionChangeSpy;
    beforeAll(() => {
      scroller.activate();
    });
    afterEach(() => {
      window.pageYOffset = 0;
      scroller.scrollStatus.direction = 'down';
      scroller.scrollStatus.lastY = 0;
    });
    it('detects if user is scrolling down', () => {
      window.pageYOffset = 1;
      scroller.detectScrollDirection();
      expect(scroller.scrollStatus.direction).toBe('down');
    });
    it('detects if user is scrolling up', () => {
      scroller.scrollStatus.lastY = 1;
      scroller.detectScrollDirection();
      expect(scroller.scrollStatus.direction).toBe('up');
    });
    beforeAll(() => {
      let directionChangeSpy = jest.spyOn(ScrollService.prototype, 'handleDirectionChange');
      it('does not fire \'handleDirectionChange\' when the direction has not changed', () => {
        window.pageYOffset = 1;
        scroller.detectScrollDirection();
        expect(directionChangeSpy).not.toHaveBeenCalled();
      });
      it('fires \'handleDirectionChange\' when the direction has changed', () => {
        window.pageYOffset = 3;
        scroller.detectScrollDirection();
        window.pageYOffset = 2;
        scroller.detectScrollDirection();
        expect(directionChangeSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
  describe('#handleDirectionChange', () => {
    beforeAll(() => {
      scroller2 = new ScrollService(entryArray2);
      scroller2.entries.forEach(entry => {
        scroller2.registerEntry(entry);
      });
      scroller2.scrolledElements = {
        '15975kiw11k7': { target: 'p', type: 'page' },
        'om17111q32319a': { target: 'p', type: 'post' },
      };
    });
    it('moves \'scrolledElements\' that are not \'trackOnceOnly\' into \'pending elements\'', () => {
      expect(scroller2.pendingElements).toEqual({});
      scroller2.handleDirectionChange();
      expect(scroller2.pendingElements).toEqual({ '15975kiw11k7': { target: 'p', type: 'page' } });
      expect(scroller2.scrolledElements).toEqual({ 'om17111q32319a': { target: 'p', type: 'post' }});
    });
  });
});