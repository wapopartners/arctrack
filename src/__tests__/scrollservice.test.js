import ScrollService from '../services/ScrollService';

jest.mock('../util/processEntry');

describe('ScrollService', () => {
  let scroller;
  let scroller2;
  let testElementsSpy;
  let querySelectorSpy;
  const entry1 = {
    load: jest.fn(),
    buffer: { top: 5, bottom: 5 },
    selector: 'page',
    trackOnceOnly: false,
    type: 'page',
  };
  const entry2 = {
    load: jest.fn(),
    buffer: { top: 100, bottom: 500 },
    selector: 'post',
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
      expect(querySelectorSpy).toHaveBeenCalledWith(`[data-${entryArray1[0].selector}]`);
    });
  });
  describe('#registerElement', () => {
    it('adds a scroll element to \'pendingElements\'', () => {
      scroller.registerElement({ node: 'node', id: 'test', type: 'post', trackOnceOnly: false });
      expect(scroller.pendingElements['test']).toEqual({
        target: 'node', 
        type: 'post',
        trackOnceOnly: false,
      });
    });
  });
  describe('#registerEntry', () => {
    it('Adds a new entry object to \'entries\'', () => {
      scroller.registerEntry({ 
        trackOnceOnly: false, 
        load: 'foo', 
        type: 'test',
        buffer: {},
        selector: 'page',
      });
      expect(Object.keys(scroller.entryTypes['test'])).toEqual([ 
        'load', 
        'shouldLoad',
        'selector',
      ]);
    });
  });
  describe('#transferElement', () => {
    let elementKey;
    beforeEach(() => {
      scroller.activate();
      for (let key in scroller.pendingElements) {
        scroller.transferElement(key, false);
      }
    });
    it('adds element from \'pendingElements\' to \'scrolledElements\'', () => {
      for(let key in scroller.scrolledElements) {
        const scrolledEl = scroller.scrolledElements[key];
        expect(scrolledEl.target).not.toBeUndefined();
        expect(scrolledEl.type).not.toBeUndefined();
      }
    });
  });
  describe('#testElements', () => {
    let entry;
    beforeEach(() => {
      entry = entryArray1[0];
      entry.load.mockClear();
      scroller.activate();
      scroller.testElements();
    });
    it('fires an entry\'s load function if the element passes its test', () => {
      expect(entry.load).toHaveBeenCalledTimes(1);
    });
  });
  describe('#removePendingElements', () => {
    let result;
    let elements;
    beforeEach(() => {
      scroller2 = new ScrollService(entryArray2);
      scroller2.activate();
      elements = scroller2.pendingElements;
    })
    it('removes elements from \'pendingElements\'', () => {
      expect(Object.keys(elements).length).toBe(2);
      result = scroller2.removePendingElements();
      expect(Object.keys(elements).length).toBe(0);
    });
    it('returns the removed elements', () => {
      for(let obj in result) {
        const removed = result[obj];
        expect(removed).toHaveProperty('type');
        expect(removed).toHaveProperty('trackOnceOnly');
        expect(removed).toHaveProperty('target');
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
        '15975kiw11k7': { target: 'p', type: 'page', trackOnceOnly: false },
        'om17111q32319a': { target: 'p', type: 'post', trackOnceOnly: true },
      };
    });
    it('moves \'scrolledElements\' into \'pending elements\'', () => {
      scroller2.handleDirectionChange();
      expect(scroller2.pendingElements).toEqual({ 
        '15975kiw11k7': { target: 'p', type: 'page', trackOnceOnly: false },
        'om17111q32319a': { target: 'p', type: 'post', trackOnceOnly: true },
      });
      expect(scroller2.scrolledElements).toEqual({});
    });
  });
});