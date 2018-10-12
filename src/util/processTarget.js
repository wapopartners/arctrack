import camelize from '../vendor/camelize';
import parseAttributeValue from './parseAttributeValue';

const deDash = str => str.replace(/-/g, ' ');

const deSpace = str => (
  str.indexOf(' ') > -1 ? str.replace(' ', '') : str
);

export default function (target, selector) {
  const name = deSpace(camelize(deDash(selector)));
  return { node: target, data: parseAttributeValue(target, name) };
}
