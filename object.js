
// Object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Gaurav",
    age: 18,
    [mySym]: "mykey1",
    "location": "Delhi",
    email: "kumar79822@gmail.com"

}

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["location"]);
console.log(jsUser[mySym]);