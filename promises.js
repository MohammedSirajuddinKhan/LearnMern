const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
    console.log("Async task completed..!");
    resolve();
},5000)
})

promiseOne.then(function(){
    console.log("Promise Consumed..!");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 completed");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 promise consumed...!");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Siraj",email:"siraj@jscodes.com"});
    },1000)
})

promiseThree.then(function(user){
console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Sirajuddin", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 2000);
});

promiseFour
  .then(() => {
    console.log(username);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("The promise is either resolved or rejected -> FINALLY");
  });

  const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let err = false
        if (!err) {
            resolve({username : "javascript",password:"12345"});
        } else {
            reject("ERRPR: JS went wrong!")
        }
    },1000)
  })

  async function consumePromiseFive() {
    const response = await promiseFive
    console.log(response);
  }

consumePromiseFive();

async function getAllUsers(){
    try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await resp.json();
        console.log(data);
    } catch (error) {
        console.log("E: ",error);
    }
}
getAllUsers();

fetch("https://api.github.com/users/mohammedsirajuddinkhan")
  .then((response) => {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch((error) => console.log(error));
