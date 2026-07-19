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
userLoggin("jainish");