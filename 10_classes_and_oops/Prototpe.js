// let myName = "Jainish      ";

// console.log(myName.length);


let myHero = [ "thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spoderman: "sling",

    getSpiderPower: function() {
        console.log(`spiderman power is ${this.spoderman}`);
        
    }
}

Object.prototype.jainish = function () {
    console.log(`jainish is present`);
    
}


Array.prototype.heyJainish = function() {
    console.log(`jainish say hello`);
    
}

// myHero.heyJainish()
// heroPower.heyJainish()

// heroPower.jainish()
// myHero.jainish()

//inheritance

const User = {
    name: "jainish",
    email: "j@example.com"
}


const teacher = {
    makeVideo: true
}

const teachingSuppoer = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: teachingSuppoer

}

teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(teachingSuppoer, teacher);

let anotherUserName = "ChaiAurCode       "

// Add a custom method named 'trueLength' to the String prototype.
// This method can be called on any string.

String.prototype.trueLength = function () {
    console.log(`${this}`);

    // Remove leading and trailing spaces using trim(),
    // then print the actual length of the string.
    console.log(`true lenght is ${this.trim().length}`);
}

anotherUserName.trueLength()

"jainish    ".trueLength()