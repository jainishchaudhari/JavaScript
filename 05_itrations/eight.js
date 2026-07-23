const arr = [1,2,3,4,5]

const init = 0;

// const arr2 = arr.reduce( (acu, curr) => {
//     console.log(`acu: ${acu} and curr: ${curr}`);
//     return acu + curr}
// , init);

const arr2 = arr.reduce((acu,curr) => acu+curr,0)

// console.log(arr2);


const shopingCart = [

    {
    iteamName: "js course",
    price: 2999
    },

    {
    iteamName: "java course",
    price: 5999
    },

    {
    iteamName: "py course",
    price: 4999
    },

    {
    iteamName: "data science course",
    price: 6999
    }

];


const total = shopingCart.reduce( (acc,iteam) => acc + iteam.price,0);
console.log(total);
