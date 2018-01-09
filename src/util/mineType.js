export default (target, selector) => target.closest(`[${selector}]`).getAttribute(selector);
