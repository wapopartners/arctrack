module.exports = function(target, selector) {
  return document.querySelectorAll(`[${selector}]`)[0].getAttribute(selector);
}