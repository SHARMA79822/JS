// const user = {
//     username: "Gaurav",
//     loginCount: 8,
//     signedIn: true,

//     getUserDeatils: function(){
//         //console.log("Got user deatila from DB");
//         console.log(this);
//     }
// }
// console.log(user.username)
// console.log(user.getUserDeatils());


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetign = function(){
        console.log(`Welcome ${thsi.usernmae}`);
    }

    return this
}

const userOne = new User("Gaurav", 20, true)
const userTwo = new User("chai aur code", 20, true)
console.log(userOne.constructor);
//console.log(userOne);

c//onsole.log(userTwo);