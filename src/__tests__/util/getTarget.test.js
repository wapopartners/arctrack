import getTarget from '~/src/util/getTarget';

describe('getTarget', () => {
  const base = {
    foo: {
      bar: {
        baz: {
          x: ['a', 'b', 'c'],
        },
      },
    },
  };
  const properties = ['foo', 'bar', 'baz'];
  const target = 'x';
  it('recurses object properties to find a target key', () => {
    expect(getTarget({ base, properties, target })).toEqual(['a', 'b', 'c']);
  });
  it('returns undefined if the key is not found', () => {
    expect(getTarget({ base, properties, target: 'y' })).toBeUndefined();
  });
});
