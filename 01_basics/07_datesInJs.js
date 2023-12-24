// let myDate = new Date()

// console.log(typeof myDate) // Object

// console.log(myDate.toString()) // Sun Dec 24 2023 13:01:20 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()) // Sun Dec 24 2023
let myNewDate = new Date(2023, 2, 12)
console.log(myNewDate.toDateString()) // Sun Mar 12 2023

console.log(myDate.toISOString()) //2023-12-24T13:04:03.139Z

// console.log(myDate.toLocaleDateString()) // 12/24/2023

// console.log(myDate.toLocaleString()) // 12/24/2023, 1:04:03 PM

// console.log(myDate.toTimeString()) // 13:04:03 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toJSON()) // 2023-12-24T13:04:03.139Z