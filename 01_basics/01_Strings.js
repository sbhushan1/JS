const name = "shekhar"
const repoCount = 50

// old syntax for string concatenation
//console.log(name + repoCount + " Value");

// new syntax for string concatenation
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shekhar-sc')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "   shekhar    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shekhar.com/shekhar%20bhushan"
console.log(url.replace('%20', '-'));

console.log(url.includes('bhushan'));

console.log(gameName.split('-'));