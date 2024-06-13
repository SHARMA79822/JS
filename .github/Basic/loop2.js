// For of
// for of loop is used for the Array
const arr = [1,2,3,4,5,6]

for (const num of arr){
    console.log(num);
}


const greeting = "Hello World";

for (const i of greeting){
    console.log(`Each Char is ${i}`)
}


// Mpas

const map = new Map()
map.set('IN', "India");
map.set('US', "United States");
map.set('FR', "France");
map.set('IN', "India");

console.log(map);
for (const [key, value] of map){
    console.log(key, '=>', value);
}



const myObj = {
    'game1': 'NFS',
    'game2': 'Spider'
}