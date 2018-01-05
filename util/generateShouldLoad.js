const generateShouldLoad = function(buffer) {
  return function(node) {
    const rect = node.getBoundingClientRect();
    const { top, bottom } = buffer;
    return (
      // #1: DOWN scrolling and the node's top edge is within the bottom buffer, AKA,
      // below viewport but almost in view 
      (rect.top <= (window.innerHeight + bottom)) || 
      // #2: UP scrolling and the node's bottom edge is within the top buffer, AKA,
      // above viewport but almost in view
      (rect.bottom  <= -top)
    );
  }
}

module.exports = generateShouldLoad;