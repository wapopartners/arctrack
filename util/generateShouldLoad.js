const generateShouldLoad = function(dimensions) {
  return function(node) {
    const rect = node.getBoundingClientRect();
    const { top, bottom } = dimensions;
    return rect.top < (window.innerHeight + bottom) && (rect.bottom > bottom);
  }
}

module.exports = generateShouldLoad;