const user = {
    userName: "Jainish",
    logInCount: 8,
    signedIn: true,
    getUserDetails: () => {
        // console.log("got user detail from databse");
        console.log(`username: ${this.userName}`);
        
        
    }
}

// console.log(user.userName); 
// console.log(user.getUserDetails());

// console.log(this);


function User (username, userCount, isLoggedIn){
    this.username = username;
    this.userCount = userCount;
    this.isLoggedIn = isLoggedIn;


    this.greeting = function () {
        console.log(`walcome ${this.username}`);
        
    }

    return this
}


// const userOne = User("Jainish", 12, true)  //not correct❌❌
// const userTwo = User("codder", 5, false) //not correct❌❌

const userOne = new User("Jainish", 12, true)

// new keyword દર વખતે એક નવો object (instance) બનાવે છે. જૂના object ની values override થતી નથી.
const userTwo = new User("codder", 5, false)

console.log(userOne.constructor);
// console.log(userTwo);
