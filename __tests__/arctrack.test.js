const Arctrack = require('../index');

let at1;
let name = 'test';
const opts = {
  initCb: function() {
    constructorTest = 1;
  }
}
let constructorTest = 0;

window.test = { property1: 'foo' };

describe('arctrack', () => {
    at1 = new Arctrack({ name, opts });
    beforeEach(() => {
        window.dispatchEvent(new Event('load'));
    })
    describe('#constructor', () => {
        it('receives analytics data when the page has loaded', () => {
            expect(at1.pageData).toBe(window.test);
        });
        it('executes a \'load\' event handler when the page has loaded', () => {
            expect(constructorTest).toBe(1);
        });
    });
});