function setUsername(username) {
  // complex DB Calls
  this.username = username;
  console.log("called");
  
}

function createUser(username, email, password) {
  setUsername.call(this, username); 
  this.email = email;
  this.password = password;
}

const siraj = new createUser("Siraj","siraj@maang.com","123")
console.log(siraj);
