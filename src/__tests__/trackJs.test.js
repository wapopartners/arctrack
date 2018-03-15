import trackJs from '../trackJs';
import store from '../Store';

jest.mock('../Store');

describe('trackJs', () => {
  let foo;
  let barSpy;
  let mockArgs;
  const decoratedArgs = 'Dan';
  const errorMsg = 'mockCb has encountered an error!';
  const mockCb = jest.fn(({ target, name, args, pageData }) => null)

  class Foo {
    @trackJs(mockCb)
    bar(x) {
      return `${x} is returned by 'bar'`;
    }
  }

  beforeAll(() => {
    store.pageData = { test: true };
    barSpy = jest.spyOn(Foo.prototype, 'bar');
    foo = new Foo();
    mockArgs = {
      target: foo,
      name: 'bar',
      args: [ decoratedArgs ],
      pageData: store.pageData,
    };
  });
  beforeEach(() => {
    foo.bar(decoratedArgs);
  });
  it('calls a callback before executing its wrapped method', () => {
    expect(mockCb).toBeCalledWith(mockArgs);
  });
  it('executes the wrapped method after calling its callback', () => {
    expect(barSpy).toBeCalledWith(decoratedArgs);
  });
  it('throws custom error from inside wrapped method if callback fails', () => {
    mockCb
      .mockImplementationOnce(() => {
        throw errorMsg;
      });
    expect(() => {
      foo.bar(decoratedArgs)
    }).toThrowError(errorMsg);
  });
});
