const generateShouldLoad = function(buffer) {
  return function(node, direction) {
    const rect = node.getBoundingClientRect();
    const { top, bottom } = buffer;
    // return (
      // #1: DOWN scrolling and the node's top edge is within the bottom buffer, AKA,
      // below viewport but almost in view 
      // (direction === 'down' && (rect.top <= (window.innerHeight + bottom))) || 
      // #2: UP scrolling and the node's bottom edge is within the top buffer, AKA,
      // above viewport but almost in view
      // (direction === 'up' && (rect.bottom  <= -top))
    // );
    return (direction === 'down' && rect.top <= 0) ||
      (direction === 'up' && rect.top >= (window.innerHeight / 2))
  }
}

module.exports = generateShouldLoad;