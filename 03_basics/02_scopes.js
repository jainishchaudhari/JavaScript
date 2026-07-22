var c = 300;
let a = 200;

if (true) {
    let a = 10;
    const b = 20;
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one () {
    const userName = "jainish";

    function two () {
        const website = "youtube";
        console.log(userName);
    };
    // console.log(website);
    // two ();
};

// one();

if(true){
    const userName = "jainish";
    if(userName==="jainish"){
        const website = " youtube";
        // console.log(userName + website);
        
    };
    // console.log(website);
    
};
// console.log(userName);


//+++++++++++++++++++++++++++ Intresting +++++++++++++++++++++++++++++++++

console.log(addOne(5));

function addOne (num) {
    return num + 1;
}

console.log(addTwo(5));
const addTwo = function (num) {
    return num + 2;
}

