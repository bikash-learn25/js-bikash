// // const score = 400
// // console.log(score)

// // const balance = new Number(100) // Number() is an object wrapper for primitive numeric values

// // // console.log(balance) // 100
// // console.log(Number()) // 0

// // console.log(balance.toString().length) 

// // // 3: Converts the numeric value balance to its string representation.
// // // As balance is 100, it will log the length of the string "100", which is 3, since there are three characters in the string.

// // console.log(balance.toFixed(2)) // 100.00
// // // It ensures that the number is represented with two decimal places, even if there are no decimal values in the original number. Especially used in E-commerce site

// // //JavaScript to directly use primitive values for numbers rather than creating instances of the Number object. 

// // const balanceOne = 100; // This is the widely used way to declare ratger than new Number()

// // console.log(balanceOne);

// // const hundreds = 1000000

// // console.log(hundreds.toLocaleString('en-IN'))

// // ++++ Maths operations ++++ //

// console.log(Math)
// console.log(Math.abs(-4)) // .abs just makes the negative number to positive
// console.log(Math.round(4.4))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))

// console.log(Math.sqrt(5))
// console.log(Math.min(4, 3, 6, 8))
// console.log(Math.max(4, 3, 6, 8))

// console.log(Math.random()) // Always gives output between 0 and 1

// console.log((Math.random() * 10) + 1)

console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))


// // Wt is the tax on product of 100 Rs if the tax is 18% ?


// // ₹15.26 will be the tax on ₹100 if the tax is 18%.


// // So, usually people answer ₹18 as tax, and say pre gst value will be 100-18 = 82.

// // but if a product is ₹100 inclusive of 18% GST.
// // then pre gst it would be 84.74 and tax will be ₹15.26.

// // as the calculation goes like: 100/1.18 = 84.74

// // (Since you don’t have to minus the gst percentage, you have to derive the pre gst value)

// const number = 123.4968

// console.log(number.toPrecision(5))

// const newNum = 100000
// console.log(newNum.toLocaleString('en-IN'))
