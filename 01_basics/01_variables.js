const accountId = 144553;
let accountEmail = "jainish22@gmail.com";
var accountPassword = "12334";
accountCity = "surat";
accountEmail = "hc@gmail.com"
accountPassword = "123388"
let accountState;

console.log(accountState);

// accountId = 2; //not allowed


/*
prefer not to use var 
becaude of issue in block scope and functional scope
*/

console.log(accountEmail);
console.log(accountId);
console.log(accountPassword);
console.log(accountCity);
accountCity = "Ahemdabad"
console.log(accountCity);



console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);