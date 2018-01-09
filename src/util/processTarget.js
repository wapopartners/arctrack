import camelize from '../vendor/camelize';
import parseAttributeValue from './parseAttributeValue';

const deDash = str => str.replace(/-/g, ' ');

export default function (target, selector) {
  const name = camelize(deDash(selector));
  return { node: target, data: parseAttributeValue(target, name) };
}
