// const tinderUser = new Object() // singleton object: or {}

const tinderUser = {} // non-singleton object: {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false


// console.log(tinderUser) // { id: '123abc', name: 'Sam', isLoggedIn: false }

const regularUser = {
    email: "abc@gmial.com",
    fullname: {
        userfullname: {
            firstname: "Bikash",
            lastname: "Das"
        }
    }
}

// console.log(regularUser.fullname.userfullname) // { firstname: 'Bikash', lastname: 'Das' }

const object1 = {1: "a", 2: "b"}
const object2 = {3: "c", 4: "d"}

// Two ways to merge objects:

// const obj3 = {...object1, ...object2}

// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = Object.assign({}, object1, object2)
console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }