const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log(`chai nahi bani`);
        
    }
}
// console.log(Object.getOwnPropertyDescriptor(chai,"price"));

Object.defineProperty(chai,"price",{
    value: 250,
    // writable: false, 
    enumerable: false, 
    // configurable: false
})
// console.log(Object.getOwnPropertyDescriptor(chai,"price"));

// chai.price = 3000;
// console.log(chai.price);


for (let key in chai) {

    if (typeof chai[key] !== 'function') {
        
        console.log(`${key}: ${chai[key]}`);
    }
    
}