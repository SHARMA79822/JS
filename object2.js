// //const tinderUser = new Object()// SingleTon Objects
// const tinderUser = {}// No SingleTon Objects

// tinderUser.id = "123abc";
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false;

// // console.log(tinderUser);
const regularUser = {
    email: "kuamr7922@gmail.com",
    fullname: {
        userfullname : {
            firstname: "Gaurav",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign(obj1, obj2);//object.assign({}, obj1, obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);




// 

const course = {
    course: "JS",
    teacher: "Hitesh",
    price: 999,
}

const {price} = course

console.log(price)