// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sami";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);S

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Jainish",
            lastName: "Chaudhari"
        }
    }
};

// console.log(regularUser.fullName.userFullName.firstName);

const object1 = {1: "a", 2: "b" };
const object2 = {3: "c", 4: "d" };
const object_3 = {5: "c", 6: "d" };
const object4 = {7: "c", 8: "d" };

// const object3 = {object1, object2};
// const object3 = Object.assign({},object1, object2, object_3, object4);

const object3 = {...object1, ...object2, ...object_3, ...object4};

// console.log(object3);

const user1 = [
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 2,
        email: "j@gmail.com"
    },
    {
        id: 3,
        email: "j@gmail.com"
    },
];

user1[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"));
