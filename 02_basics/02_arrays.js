const marvel_Heros = ["Thore", "Ironman", "Spiderman"];
const dc_Heros = ["Superman", "Flash", "Batman"];

// marvel_Heros.push(dc_Heros);

// console.log(marvel_Heros);
// console.log(marvel_Heros[3][1]);

// const all_Heros = marvel_Heros.concat(dc_Heros);
// console.log(all_Heros);

const all_new_heros = [...marvel_Heros,...dc_Heros];
// console.log(all_new_heros);


const array3D = [ 1, 2, 3, 4, [ 7, 6 ] , 7, 8, [ [ 3, 4 ], [ 9, 10 ] ], 11 ];
const flatArray = array3D.flat(2);
// console.log(flatArray);

console.log(Array.isArray("jainish"));
console.log(Array.from("jainish"));
console.log(Array.from({name: "jainish"}));//intresting case

let score1 =  100;
let score2 =  300;
let score3 =  200;

console.log(Array.of(score1, score2, score3));
