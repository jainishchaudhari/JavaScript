class User {
    constructor (username) {
        this.username = username
    }

    logMe () {
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class teacher extends User {
    constructor (username, email, password) {

        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`new course is added by a ${this.username}`);
        
    }
}

const chai = new teacher("chai", "chai@gmail.com", 123)

chai.addCourse()
console.log(chai);

chai.logMe()

const masalchai = new User("masalachai")

masalchai.logMe()

console.log(chai instanceof teacher);
