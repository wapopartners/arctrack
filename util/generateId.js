const alph = [
  'a', 
  'b', 
  'c', 
  'd', 
  'e', 
  'f', 
  'g', 
  'h', 
  'i', 
  'j', 
  'k', 
  'l', 
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

module.exports = function generateId() {
  let result = '';
  for(let i = 0; i < 10; i ++) {
    const random = Math.floor(Math.random() * 24);
    (random % 2 === 0) ? result += alph[random] : result += random;
  }
  return result;
}