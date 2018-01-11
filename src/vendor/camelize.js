// https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case#answer-2970667
export default str => (
  str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => (
    index === 0 ? letter.toLowerCase() : letter.toUpperCase().replace(/\s+/g, '')
  ))
);
