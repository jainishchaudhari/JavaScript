const user = {
    userName: "jainish",
    price: 999,

    welcomeMassage: function () {
        console.log(`${this.userName} , welcome to website`);
        console.log(this);
        
    }
};

// user.welcomeMassage();
// user.userName = "max";
// user.welcomeMassage();

// console.log(this);

// function chai () {
//     const a = "jainish";
//     console.log(this.a);
    
// };

// const chai =  function () {
//     const a = "jainish";
//     console.log(this);
    
// };


const chai = () => {
    const a = "jainish";
    console.log(this);
    
};

// chai();

// const addnum = (num1, num2) => {
//     return num1 + num2;
// }

// const addnum = (num1, num2) =>  num1 + num2;
// const addnum = (num1, num2) =>  (num1 + num2);
const addnum = (num1, num2) =>  ({name: "jainish"});

console.log(addnum(3,4));
