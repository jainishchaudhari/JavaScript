class User {
    constructor(username){
        this.username = username
    }
    logMe() {
        console.log(`USERNAME: ${this.username}`);
        
    }

     static creatId() {
        return `123`
    }
}

const Jainish = new User("Jainish")
// console.log(Jainish.creatId());


class teacher extends User {
    constructor(username,email) {
        super(username)
        this.email = email
    }
}
const iphone = new teacher("iphone", "iphone@gmail.com")

console.log(iphone.logMe());
