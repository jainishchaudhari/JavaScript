//Date

let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toUTCString());


// let createDate = new Date(2026, 6, 13);
// let createDate = new Date(2026, 6, 13, 5, 3, 35);
let createDate = new Date("2026-07-12");
// console.log(createDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(myTimeStamp/1000));


let newDate =  new Date();

// console.log(newDate);
// console.log(newDate.getMonth() + 1);

let newDate1 = newDate.toLocaleString('default', {
    weekday : "long"
})

console.log(newDate1);
