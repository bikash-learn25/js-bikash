// const myArr = [0, 1, 2, 3, 4, 5]
// // const myCars = ['BMW', 'TATA', 'TVS']

// // console.log(myCars)

// // console.log(myArr[3])

// // Array methods

// // myArr.push(6)
// // myArr.push(7)
// // myArr.pop()

// // myArr.unshift(9)
// // myArr.shift()

// // console.log(myArr.includes(9)) // false
// // console.log(myArr.indexOf(4)) // 4
// // console.log(myArr.indexOf(8)) // -1

// // const newArr = myArr.join()

// // console.log(typeof myArr) // object
// // console.log(typeof newArr) // string

// // slice, splice methods

// console.log('A ', myArr) // A  [ 0, 1, 2, 3, 4, 5 ]

// const myn1 = myArr.slice(1, 3)
// console.log(myn1) // [ 1, 2 ]
// console.log('B ', myArr) // B  [ 0, 1, 2, 3, 4, 5 ]

// const myn2 = myArr.splice(1, 3)
// console.log('C ', myArr) // C  [ 0, 4, 5 ]
// console.log(myn2) // [ 1, 2, 3 ]

// Example 2 for slice() and splice() methods
var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"]

// Slice() method

/* in Slice(), when you're passing up a range the first value which is the start point is always inclusive and the last value or the end range is always exclusive. */

console.log(users.slice(1, 3)) // ['Tim', 'Ton' ]
console.log(users.slice(2, 4)) // [ 'Ton', 'Sam' ]
console.log(users.slice(3, 5)) // [ 'Sam', 'Sor' ]
console.log(users.slice(1)) // [ 'Tim', 'Ton', 'Sam', 'Sor', 'Sod' ] : It excluded the index 1 value

// users.length - 1 calculates the index of the last element in the array, and slice extracts elements from that index to the end of the array.

console.log(users.slice(users.length -1)) // [ 'Sod' ]
console.log(users.slice(users.length -2)) // [ 'Sor', 'Sod' ]
console.log(users.slice(users.length -3)) // [ 'Sam', 'Sor', 'Sod' ]
console.log(users.slice(users.length -4)) // [ 'Ton', 'Sam', 'Sor', 'Sod' ]
console.log(users.slice(users.length -5)) // [ 'Tim', 'Ton', 'Sam', 'Sor', 'Sod' ]


// Splice() Method

