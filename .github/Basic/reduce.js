const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);



const card = [
    {
        itemName: "JS Course",
        price: 2999,
    },
    {
        itemName: "Mobile Apk",
        price: 12999,
    },
    {
        itemName: "Data Scinece",
        price: 299,
    },
    {
        itemName: "Data Ana",
        price: 999,
    },
]

const price = card.reduce((acc, item) => acc + item.price, 0)

console.log(price);