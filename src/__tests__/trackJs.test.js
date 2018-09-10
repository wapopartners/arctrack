import trackJs from '../trackJs';

describe('trackJs', () => {
  let foo;
  let barSpy;
  let mockArgs;
  const decoratedArgs = 'Dan';
  const errorMsg = 'mockCb has encountered an error!';
  const mockCb = jest.fn(({
    eventName,
    methodName, 
    instance,
    args,
  }) => null)

  class Foo {
    @trackJs(mockCb, 'bar-event')
    bar(x) {
      return `${x} is returned by 'bar'`;
    }
  }

  beforeAll(() => {
    barSpy = jest.spyOn(Foo.prototype, 'bar');
    foo = new Foo();
    mockArgs = {
      eventName: 'bar-event',
      methodName: 'bar',
      instance: foo,
      args: [ decoratedArgs ],
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
