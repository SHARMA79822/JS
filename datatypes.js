
// // Types of Data Types

// // There are two types of Data Types


// // // Primitive Data Types 

// // i)   String // let name = "Gaurav"
// // ii)  Number // let score = 100
// // iii) Boolean // let boolean = true
// // iv)  null    // let outsideTemp = null
// // v)   undefined // let name;
// // vi)  BigInt // let num = 123457952152512n;
// // vii) Symbol //

// const id = Symbol('123')
// const  anotherId = Symbol('123')

// console.log(id === anotherId);

// // // Non - Primitive or Reference Data Types

// // i)   Array
// // ii)  Object
// // iii) Function



// const heros = ["Shaktiman", "naagraj", "doga"]//Array

// let myObj = {
//     name: "Gaurav",   //Object
//     age: 20,
// }

// function fun{
//     //
// }


//************************************************************************ */


// Stack (Primitive)

let myName = "Gaurav"
let anotherName = "myName"

anotherName = "chaiwithcode"

console.log(myName);
console.log(anotherName);

// Heap (Non Primitive)

let userOne = {
    email: "kumar79@gmail.com",
    upi: "87505725@"
}

let userTwo = userOne;

userTwo.email = "sharma7982@gam"

console.log(userOne);
console.log(userTwo);
