const accountId = 18383
let accountEmail = "rathore@gmail.com"
var accountPassword = "12345"
let accountState;

console.table([accountId, accountEmail, accountPassword, accountState])

//accountId = 2  //Not allowed
accountEmail = "anant@gmail.com"
accountPassword = "23323"
accountState = "Jharkhand"

console.table([accountId, accountEmail, accountPassword, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/