function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email",{
    get: function(){
        return this._email.toUpperCase()
    },
    set: function(value){
        this.email = value
    }
    
  });
}

const siraj = new User("sirajuddin@gmail.com","BGMI")
console.log(siraj.email);
console.log(siraj.password);
