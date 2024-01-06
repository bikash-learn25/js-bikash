// if statement

// if condition contains "fasle", the code doesn't execute

// if (false) {
//     console.log("Hi");
// }

// Logical Operator: <, >, <=, >=, ==, !=, ===, strict inequality ( !== )

// const isUser = true

// != - not equal operator
// if (2 != 1) {
//     console.log("true");
// }

// if (2 == "2") {
//     console.log("hi"); // hi
// }

// if (2 == "") {
//     console.log("hi"); // no output
// }

// if (2 === "2") {
//     console.log("hi"); // no output
// }

// if (2 !== "2") {
//     // console.log("hi");
// }
// console.log("Executed"); // Executed

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`); // user power: fly
// }


// const balance = 1000

// // if (balance > 500) console.log("test"), console.log("test2"); - Not a good practice

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
// if we want to check both conditions , use "&&"
if (userLoggedIn && debitCard) {
    console.log("Allow to buy online");
}

// if we want to check multiple conditions, use "||"

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in!");
}



