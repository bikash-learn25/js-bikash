// let name = 'john';
// let age = 20;
// let person = {
//     name: "brad",
//     age: 40
// }

// console.log(person.name);

// Interview Qs-1

// Array.prototype.extraProperty = "Bikash"

// const myNewArray = [1, 2, 3, 4, 5]

// for(let v in myNewArray) {
//     if (myNewArray.hasOwnProperty(v)) {
//         console.log(v);
//     }

// }

// Interview Qs-2

 Array.prototype.customForEachOne = function(callback){
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
 }