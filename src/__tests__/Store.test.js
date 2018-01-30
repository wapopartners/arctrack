import store from '../Store';

describe('store', () => {
  it('has a #set method', () => {
    expect(store.set).not.toBeUndefined();
  });
});
