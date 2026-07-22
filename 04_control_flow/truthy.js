const userEmail = []

// if (userEmail) {
//     console.log(`got user email ${userEmail}`);
    
// }else{
//     console.log("user dont have email");
    
// }

// falsey value ++++++++++++++++++++++++++++++++++++++

// false, 0, -0, Bigint = 0n , "", null, undefine, NaN

// truthy value ++++++++++++++++++++++++++++++++++++++

// "0", 'false' , " ", [ ], { }, function () {},

// if (userEmail.length === 0) {
//     console.log("array is empty");
    
// }

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
    console.log("object is empty");
    
}

// Nullish Coalescing Operator (??): null , undefined

// let val1 = 5 ?? 10;
// let val1 = null ?? 10;
// let val1 = undefined ?? 15;
var1 = null ?? 10 ?? 10;


// console.log(val1);


// terniary operator

// condtion ? true : false;

let iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less then 80");

