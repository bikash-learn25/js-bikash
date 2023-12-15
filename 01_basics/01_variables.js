const accountId = 144553;
let accountEmail = "bkda.dev1@gmail.com";
var accountPassword = "12345";
accountCity = "Balasore";

// accountId = 2; // not allowed

accountEmail = "bk%bk.com"
accountPassword = "212121"
accountCity = "BBSR"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])

/*
The keyword "var" is less preferrable used and most widely used keywords are "let" and "const".
; because of issue in block scope and functional scope.

- Variables declared with "var" are function-scoped, not block-scoped. 
- This means that the variable is visible throughout the entire function, even if it's declared inside a block.

*/

