//for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [ 1, 2, 3, 4, 5 ];

for (const num of arr) {
    // console.log(`${arr.indexOf(num)} = ${num}`);
    
}

const greeting = "hello world";

for (const greet of greeting) {
    if (greet == " ") {
        continue;
    }
    // console.log(`each char is ${greet}`);
    
}

const map = new Map();

map.set('IN', "INDIA");
map.set('USA', "UNITED STATE OF AMERICA");
map.set('FR', "FRANCE");
map.set('IN', "INDIA");

// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ":-" ,value);
    
}

const myObject = {
    game1: "NSF",
    game2: "PUBG"
}


// for (const [key, value] of myObject) {
//     console.log(key,value);                  // not working   ❌❌
// }