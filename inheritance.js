class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // refers to the parent class and takes context for `this` with it
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new Course was added by ${this.username}`);
        
    }
}

const tea = new Teacher("tea","tea@gmail.com","123") // constructor can only be called by the usage of `new` keyword
tea.addCourse()

const coffee = new User("coffee")
coffee.logMe()

console.log(tea instanceof Teacher);
console.log(tea === coffee);