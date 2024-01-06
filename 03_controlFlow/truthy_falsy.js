// // // truthy value

// // // const userEmail = "ai@bikash.com" // // Got user email

// // // const userEmail = "" // Dont have user email

// // const userEmail = []  // Got user email - because array is a truthy value

// // if (userEmail) {
// //     console.log("Got user email");
// // } else {
// //     console.log("Dont have user email");
// // }


// /* 
// Falsy values:

// The values are:- false, 0, -0, BigInt on, "", null, undefined, and NaN

// */

// /* 
// Truthy values:

// - all the non-falsy values and a few values are trythy values such as:

// The values are:- "0", "false" (whatever we mention inside a string/curly braces, thats truthy vale), " ", [], {}, function(){}

// */

// // const userEmail = []

// // if (userEmail.length === 0) {
// //     console.log("array is empty");
// // }

// // Nullish coalescing operator (??): bull undefined

// /*
// The nullish coalescing operator is used to assign a default value (10) to val1 only if its current value is "null" or "undefined". 

// In this case, the current value is explicitly set to 5, so the default value is not used. 

//  */

// // let val1;
// // val1 = 5 ?? 10

// // console.log(val1); // 5

// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 15 // 15
// val1 = null ?? 15 ?? 25 // 15: this operator always prefers the 1st value that is given (such as 15 and 25)

// console.log(val1);


// Terniary operator

// condition ? trueExpression : falseExpression

// const iceTeatprice = 100

// iceTeatprice <= 80 ? console.log("Less than 80") : console.log("More than 80"); // More than 80