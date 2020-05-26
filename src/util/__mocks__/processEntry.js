export default function (entry) {
  return Object.assign(
    {},
    {
      load: entry.load,
      type: entry.type,
      selector: entry.selector,
      shouldLoad: function() {
        return true;
      },
    },
  );
};