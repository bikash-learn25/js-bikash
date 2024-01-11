// reduce()

const myNums = [1, 2, 3]

//accumulator and current value
// const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval ${curval}`);
//     return acc + curval

// }, 0)

// arrow function

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) // 6


// console.log(myTotal);


const shoppingCart = [

{
    itemName: "js course",
    price:  999
},
{
    itemName: "cp course",
    price:  9919
},
{
    itemName: "java course",
    price:  2999
}

]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
