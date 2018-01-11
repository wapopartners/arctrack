/*
  input 'node' [DOM node]: analytics target DOM node
  input 'attrName' [String]: property name of node's 'dataSet'
  element may have data attributes in the form of: data-attrName="foo"
  output [String]: value of data attribute from node 'dataSet'
  */
export default function parseAttributeValue(node, attrName) {
  // using 'stringify' and 'parse' to address Webkit (iOS) bug
  // https://bugs.webkit.org/show_bug.cgi?id=161454
  const attributes = Object.assign(
    {},
    JSON.parse(JSON.stringify(node.dataset)),
  );

  let parsedValue;
  Object.keys(attributes).forEach((key) => {
    if (key.indexOf(attrName) > -1) {
      parsedValue = attributes[key];
    }
  });
  return parsedValue;
}

