//Primitiv

// 7 types : String, Number, Boolean, Null, Undefind, Symbols, BigInt

const score = 30;
const scoreValue = 30.3;

const isLoggedin = false;
const temp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 3345n;


//Refrence (non primitiv) type

//Array, Objects, Functions

const arr = ["me", "you", "who"]

const obj = { 
    name : "jainish",
    age : 23
};

const myFunction = function () {
    // console.log(5);
    
};

myFunction();


const arr1 = ["hi", 6, "hey"];

console.log(arr1[1]);

console.log(typeof arr1[1]);
