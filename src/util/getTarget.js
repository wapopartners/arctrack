export const getTarget = function ({
  base = window,
  properties,
  target,
}) {
  const prop = properties && properties.length ? properties[0] : null;
  if (base[prop]) {
    return (
      getTarget({
        base: base[prop],
        properties: properties.slice(1, properties.length),
        target,
      })
    );
  }
  return base[target];
};

export default getTarget;
