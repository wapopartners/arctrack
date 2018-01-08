/*
  input 'node' [DOM node]: analytics target DOM node
  input 'attrName' [String]: property name of node's 'dataSet'
  element may have data attributes in the form of: data-attrName="foo"
  output [String]: value of data attribute from node 'dataSet' 
*/
function parseAttributeValue(node, attrName) {
  // using 'stringify' and 'parse' to address Webkit (iOS) bug
  // https://bugs.webkit.org/show_bug.cgi?id=161454
  const attributes = Object.assign(
    {},
    JSON.parse(JSON.stringify(node.dataset))
  );

  let parsedValue;
  for (let key in attributes) {
    if (key.indexOf(attrName) > -1) {
      parsedValue = attributes[key];
    }
  }

  return parsedValue;
}

const deDash = function(str) {
  return str.replace(/-/g, ' ');
}

const camelize = function(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

const processTarget = function(target, selector) {
  const name = camelize(deDash(selector));
  return { 
    node: target, 
    data: parseAttributeValue(target, name),
  };
};

module.exports = processTarget;