module.exports = function(target, selector) {
  return target.closest(`[${selector}]`).getAttribute(selector);
}