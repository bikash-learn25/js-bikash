const marvel = ['Thor', 'Cap America', 'Iron Man']

const dc = ['Batman', 'Flash', 'Superman']

// console.log(marvel.concat(dc)) // [ 'Thor', 'Cap America', 'Iron Man', 'Batman', 'Flash', 'Superman' ]

// marvel.push(dc)

// console.log(marvel)
/* ['Thor', 'Cap America', 'Iron Man', [ 'Batman', 'Flash', 'Superman' ]] 

Here there are 4 elements and the 4th element has furhter array inside it!

*/
// console.log(marvel[3][0]) // Batman - It access the 0th value of the 3rd element of the array

// console.log(marvel[3][1]) // Flash - It access the 1st value of the 3rd element of the array

// const allHeros = marvel.concat(dc)
// console.log(allHeros) // [ 'Thor', 'Cap America', 'Iron Man', 'Batman', 'Flash', 'Superman' ]

// Another way of concatinatinating is called"Spread" - How to add two arrays using Spread operator?

const allNewHeros = [...marvel, ...dc]

// console.log(allNewHeros) // [ 'Thor', 'Cap America', 'Iron Man', 'Batman', 'Flash', 'Super']

const newArrays = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]

const realAnotherArray = newArrays.flat(Infinity)

// console.log(realAnotherArray)
/* [
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ] */

  console.log(Array.isArray('Bikash')) // false
  console.log(Array.from('Bikash')) // [ 'B', 'i', 'k', 'a', 's', 'h' ]
  console.log(Array.from({name: "Bikash"})) // empty array: []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // [ 100, 200, 300 ]