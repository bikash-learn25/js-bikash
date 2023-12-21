// const name = "bikash"
// const repoCount = 50

// // console.log(name + repoCount + " Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // This is String interpolation. Use backticks(``) not double quote''.

// const gameName = new String('BikashNewi')

// console.log(gameName[5])
// console.log(gameName.__proto__)

// // console.log(gameName.length);
// // console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("i")); // In JavaScript, the indexOf method returns the index of the first occurrence of the specified value. If there are multiple occurrences of the value in the string, it will return the index of the first one.

// const newString = gameName.substring(0, 4) // output will be the substring that starts at index 0 and ends just before index 4, so it includes characters at indices 0, 1, 2, and 3. 

// // The substring() method in JavaScript is a string method used to extract a portion of a string. It takes two parameters: the starting index and the ending index (exclusive). 

// // The code gameName.substring(0, 4) extracts a substring from gameName starting at index 0 and ending just before index 4

// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString)

// // Key Differences b/w substring() and slice():
// // Negative Index:

// // slice() allows the use of negative indices to count from the end of the string.
// // substring() does not support negative indices.

// // Argument Order:

// // If startIndex is greater than endIndex:
// // slice() will return an empty string.
// // substring() will swap the arguments and extract the substring.

// // Compatibility:

// // slice() is more versatile due to its ability to use negative indices.
// // substring() is part of the ECMAScript standard, whereas slice() is part of both ECMAScript and the JavaScript standard.

// const newStringOne = "   Bikash   "

// console.log(newStringOne)
// console.log(newStringOne.trim()) // trim() removes the leading and trailing spaces from the original string, resulting in a new string without the extra whitespace.


// const url = "https//bikash.com/blog%20ind"

// console.log(url.replace("%20", "-")) // replace() method in JavaScript is a string method that is used to replace a specified substring or pattern with another substring.


// console.log(url.includes('bikash')) // this will check inside the string if the checked strinf is included in the given string.


// const gameNameOne = new String ('Bikash-Das-Adhikari')

// console.log(gameNameOne.split('-'))
// // [ 'Bikash', 'Das', 'Adhikari' ] - It will split the string based on "-".
let a = "Bikash"
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])

console.log(a.length)

let Myname = "Harry"
let nameOne = "Rahul"

// console.log("His name is " + Myname + " and his friends name is " + nameOne)

console.log(`His name is ${Myname} and his friend name is ${nameOne}.`) // This called Template Literals and this is the right way to write.


console.log(nameOne.toUpperCase())
console.log(nameOne.toLowerCase())
console.log(nameOne.length) // 5
console.log(nameOne.slice(1)) // ahul

console.log(nameOne.replace("Ra", "Me")) // Mehul

console.log(nameOne.concat(Myname, "Bikash")) // RahulHarryBikash

console.log(nameOne.concat(Myname)) // RahulHarry

// Strings are immutable (unchanged)
