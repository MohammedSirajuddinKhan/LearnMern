const user = {
  username: "Sirajuddin",
  loginCount: 7,
  signedIn: true,
  getUserDetails: function () {
    //   console.log("Got user details from database");
    //   console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greetings = function(){
    console.log(`Welcome ${this.username}`);
    
  }

  return this; // Implicitly returned so no need to write `return`
}

// when `new` is used:
// Step 1: new object is created
// Step 2: Constructor function is called
// Step 3: Arguments are injected into the constructor function
// Step 4: We get the desired output ~_~

const userOne = new User("Sirajuddin",12,true)
const userTwo = new User("JS",11,false)
console.log(userOne.constructor); 
console.log(userTwo.greetings()); 

