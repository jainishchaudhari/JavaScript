const User = {
    _email: "j@jc.com",
    _password: "abc",

    get email (){
        return this._email.toLowerCase()
    },
    set email (value) {
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea._email);
