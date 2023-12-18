// Primitive 

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// const id = Symbol("123")
// const anotherId = Symbol("123")

// console.log(id === anotherId)
// console.log(id == anotherId)

// const bigNumber = 87346734809347634834n

// // console.log(bigNumber)


// // Reference type or Non-Primitives

// // 3 types: Objects, Arrays, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "Bikash",
//     age: 25,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof bigNumber)


console.log(null > 0) // false
console.log(null== 0) // false
console.log(null >= 0) // true

// The reason is that an equality check == and comparisons ><>=<= work differently.//
// The Comparisons convert "null" to a number, treating it as "0". Thats why (3) null >= 0  is trye and (1) null > 0 is false.//








