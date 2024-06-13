const userEmail = "";

if (userEmail){
    console.log("Got user email");
}else {
    console.log("Don't have user email");
}




// fasly Value

// fasle ,0 ,-0, BigInt 0n, "", null, undefined, NaN

// Truthy Values

// "0", 'false', " ", [], {}, function(){}






if (userEmail.length === 0){
    console.log("Array is Empty");
}




// Nullish Coalescing Operaot (??): null Undefined

let val1;
// val1 = 5 ?? 10  // 5
// val1 = 10 ?? 5  // 10
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15 //15
val1 = null ?? 10 ?? 20 // 10
console.log(val1);


// Terniary Operator

// condition ? true : false 

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less Then 80") : console.log("More Then 80");

