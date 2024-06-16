const promiseOne = new Promise(function(resolve, reject){
    // Do an Asunc Task
    //DB Calls, CryptoGraphy, network
    setTimeout(() => {
        console.log('Asunc task is complete')
        resolve()
    }, 1000);
})

//
promiseOne.then(function(){
    console.log("Promise Consumed")
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2")
    })
}).then(function(){
    console.log("Promise 2 Consumed")
})


//
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai",email: "chai@example.com"})
    }, 1000)
})


promiseThree.then(function(user){
    console.log(user)
})
  

//
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({username: "Gaurav", password: "2004"})
        } else {
            reject('Error: Something went Wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The Promise is Either Resolved or Reject"))
//console.log(username);


//
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({username: "JAVASCRIPT", password: "2004"})
        } else {
            reject('Error: JS went Wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch (error){
        console.log(error);
    }
}

consumePromiseFive()


async function getAllUser(){
    try{
        const response = await fetch('http:/jsonplaceholder.typicode.come/users')
        const data = response.json()
        console.log(data);  
    } catch (error){
        console.log("E: ", error);
    }
}

getAllUser()
