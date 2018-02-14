import store from '../Store';

describe('store', () => {
  beforeAll(() => {
    window.bar = {
      baz: {
        test: true,
      },
    };
  });
  describe('#set', () => {
    it('will throw an error if data passed in does not get attached to the instance', () => {
      expect(() => {
        store.set({});
      }).toThrow();
    });
    it('accepts a string in the pattern \'foo.bar.baz\' for the \'opts.location\' argument', () => {
      store.set({
        name: 'foo',
        location: 'bar.baz',
      });
      expect(store.foo).toEqual(window.bar.baz);
    });
  });
});