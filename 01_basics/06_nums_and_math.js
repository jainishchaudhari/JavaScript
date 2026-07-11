const score = 400
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));

const newNum = 129.92945;
// console.log(newNum.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++ Maths +++++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(3.3));
// console.log(Math.ceil(3.1));
// console.log(Math.floor(3.9));

// console.log(Math.pow(4,3));
// console.log(Math.max(2,3,4,6,7,1));
// console.log(Math.min(2,3,4,6,7,1));

// console.log(Math.random()*10);
// console.log(Math.random());
// console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

const x = Math.floor(Math.random() * (max - min +1)) + min;
console.log(x);
