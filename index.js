const placeholder = () => console.log('Arctrack initialized');

module.exports = class Arctrack {
  constructor({ init = placeholder, name = 'arctrack' }) {
    window.onload = () => {
      try {
          this.pageData = window[name];
          init(this.pageData);
      } catch (err) {
          console.error('Arctrack failed with the following error:', err);
      }
    }
  }
}
