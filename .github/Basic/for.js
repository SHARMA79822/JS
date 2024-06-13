
//for in loop is used for the Objects

const myObj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by Apple",
}

for (const key in myObj){
    console.log(`${key} Shortcut is for ${myObj[key]}`);
}




const programming = ["js","c++","c#","r"]

for (const key in programming){
    console.log(`${programming[key]}`);
}




// const map = new Map()
// map.set('IN', "India");
// map.set('US', "United States");
// map.set('FR', "France");
// map.set('IN', "India");

// for(const key in map){
//     console.log(key)
// }