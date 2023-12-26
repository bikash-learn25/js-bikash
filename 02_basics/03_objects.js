// Two ways to declare an object: 1) Literal and 2) Constructor

// Singleton object

const mySym = Symbol("key1")

const jsUser = {
    name: "Bikash",
    "full name": "Bikash Ad",
    [mySym]: "mykey1",
    age: 18,
    location: "Balasore",
    email: "bikash@gail.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Tuesday"]
}

// console.log(jsUser.email) // bikash@gail.com

// // using two ways, an email can be obtained

// console.log(jsUser["email"]) // bikash@gail.com

// console.log(jsUser["full name"]) // Bikash Ad

// console.log(jsUser[mySym]) // mykey1

// console.log(typeof mySym) // symbol datatype

// Object.freeze(jsUser)
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello")
}
jsUser.greetingTwo = function(){
    console.log(`Hello, ${this.name}`)
}

console.log(jsUser.greeting) // [Function (anonymous)]

console.log(jsUser.greeting()) // undefined

console.log(jsUser.greetingTwo()) // Hello, Bikash

