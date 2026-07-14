//+++++++++     singleton       +++++++++
// Object.create

//++++++++++++  object literal   ++++++++

const mySym = Symbol("key1");

const jsUser = {
    name: "jainish",
    "f Name": "Jainish Chaudhari",
    [mySym]: "key1",
    age: 23,
    location: "surat",
    email: "user@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: [ "mon", "wed", "fri" ]
};

// console.log(jsUser.age);
// console.log(jsUser["email"]);
// console.log(jsUser["mySym"]);

// jsUser.email = "jainish@google.com";

// Object.freeze(jsUser);

jsUser.email = "jainish@google.com";
// console.log(jsUser);


jsUser.greeting1 = function () {
    console.log("hello js"); 
}

jsUser.greeting2 = function () {
    console.log(`hello js, ${this["f Name"]}`);   
}


console.log(jsUser.greeting1());
console.log(jsUser.greeting2());

