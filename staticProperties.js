class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // This prevents to use for everyone
    static createId(){
        return `123`
    }
}

const siraj = new User("sirajuddin")
// console.log(siraj.createId())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.username = username
    }
}

const iphone = new Teacher("iphone","i@gmail.com")
// console.log(iphone.createId());
console.log(iphone.logMe());

