const name = "jainish";
const repoCount = 2;

// console.log(name + repoCount + " value");

// console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

// name.toUpperCase()

const gameName = new String('jainish-jc-com');
// console.log(gameName[5]);
// console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0,5);
console.log(newString);

const anotherString = gameName.slice(-2,10);
console.log(anotherString);

const newStringOne = "    jainish    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://jainish.com/jainish%20chaudhari";

console.log(url.replace("%20"," "));
console.log(url.includes(`jainish`));

console.log(gameName.split("-",1));
