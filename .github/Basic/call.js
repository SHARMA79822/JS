function SetUsername(username){
    //Complex DB Calls
    this.username = username
    console.log("Called")
}

function createUser(username, email, password){
    SetUsername.call(username)

    this.email = email
    this.password = password


}

const chai = new createUser("chai", "chai@gmail.com", )
console.log(chai);