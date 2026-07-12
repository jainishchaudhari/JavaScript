//Arrays

const arr = [1,2,3,4,5];
const hero = ["spiderman", "ironman", "superman", "betman"];

const arr2 = new Array(1,2,3,4,5);

// console.log(hero[2]);

//Array methods

// arr.push(6);
// arr.push(7);
// console.log(arr);

// arr.pop();

// console.log(arr);


// arr.unshift(9);
// arr.shift();
// console.log(arr);
// console.log(arr.includes(9));
// console.log(arr.indexOf(9));


// const newArr = arr.join();

// console.log(newArr.replaceAll(",", "-"));


//slice, splice

console.log("A", arr);

const myn1 = arr.slice(1,3);

console.log(myn1);

console.log("B", arr);


const myn2 = arr.splice(1,3);
console.log("c", arr);

console.log(myn2);
