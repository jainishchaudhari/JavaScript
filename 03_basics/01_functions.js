function fs () {
    console.log("J");
    console.log("a");
    console.log("i");
    console.log("n");
    console.log("i");
    console.log("s");
    console.log("h");
}

// fs();

function sumOfTwo (num1, num2) {
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
};

const result = sumOfTwo(3,5);

// console.log("result: ", result);

function userLoggin (username = "sam") {
    if (!username){
        console.log("please enter your name");
        return;
    }

    console.log(`${username} just logged in`);
         
};


// const user = userLoggin("jainish");

// console.log(userLoggin("jainish"));
// console.log(userLoggin());
// userLoggin("jainish");

function calculateCartePrice (val1, val2, ...num1) {
    return num1;
};

// console.log(calculateCartePrice(400, 500,600, 2000 ));

const user = {
    username: "jainish",
    prices: 199
}

function handleObject (anyobject) {
    console.log(`username is ${anyobject.username}, or price is ${anyobject.price}`);
    
};

// handleObject(user);
handleObject({
    username: "jhon",
    price: 999
});

const arr = [ 100, 200, 300, 400 ];

function returnSecoundValue (getArry){
    return getArry[1];
};

// console.log(returnSecoundValue(arr));
console.log(returnSecoundValue([10,20,30,40]));
