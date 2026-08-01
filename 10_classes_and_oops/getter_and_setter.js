class User {
    constructor (email, password) {
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email (value) {
        this._email = value
    }

    get password (){
        return `${this._password}hoho`
    }
    set password(value){
        this._password = value
    }
}

const Jainish = new User("jainish@gm.ai", "abc")
console.log(Jainish.password);
console.log(Jainish.email);
