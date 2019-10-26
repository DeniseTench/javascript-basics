const sayHello = string => {
  return "Hello, " + string + "!";
};

const uppercase = string => {
  return string.toUpperCase();
};

const lowercase = string => {
  return string.toLowerCase();
};

const countCharacters = string => {
  return string.length;
};

const firstCharacter = string => {
  return string.charAt(0);
};

const firstCharacters = (string, n) => {
  return string.slice(0, 4); 
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};


//const firstCharacters = (string, n) => {
  //return string.charAt(0, 1, 2, 3);
  //return string.charAt([0], [1]);
//};

