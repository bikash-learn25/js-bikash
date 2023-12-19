//Stack memory, Heap memory

// Primitive type - Stack memory
// Non-primitive type - Heap memeory

// let myName = "Bikash"

// let anotherName = myName
// anotherName = "Rahul"

// console.log(myName)
// console.log(anotherName)

let userOne = {
    email: "abc@gmail.com",
    age: "23"
}

let userTwo = userOne

userTwo.email = "abc@gmail.com" // In Objects, emials are accessed using ".email"

console.log(userOne.email)
console.log(userTwo.email)