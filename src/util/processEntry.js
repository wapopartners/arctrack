const processBuffer = function (buffer) {
  if (!buffer.top) {
    return Object.assign({}, buffer, { top: 0 });
  }

  if (!buffer.bottom) {
    return Object.assign({}, buffer, { bottom: 0 });
  }

  return buffer;
};

const generateShouldLoad = function (buffer) {
  return function (node, direction) {
    const rect = node.getBoundingClientRect();
    const { top, bottom } = buffer;
    return (direction === 'down' && rect.top <= top) ||
           (direction === 'up' && rect.bottom >= (window.innerHeight + bottom));
  };
};

export default function (entry) {
  let shouldLoad;
  if (entry.buffer) {
    shouldLoad = generateShouldLoad(processBuffer(entry.buffer));
  } else {
    shouldLoad = generateShouldLoad({ top: 0, bottom: 0 });
  }
  return Object.assign(
    {},
    {
      load: entry.load,
      type: entry.type,
      selector: entry.selector,
      shouldLoad,
    },
  );
}

