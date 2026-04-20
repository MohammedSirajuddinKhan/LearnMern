// +++++++++++++++++ DAY 5 +++++++++++++++++

const user={
    username:"Siraj",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
        // This keyword is used when the context of the function is the object itself, so we can access the properties of the object using this keyword so even if the value is changed in the future, we can still access the updated value using this keyword, so it is a good practice to use this keyword when we want to access the properties of the object inside the function.
    }

}
//   user.welcomeMessage();

//   user.username="Sam" // Context is changed so we get Sam instead of Siraj
//   user.welcomeMessage(); 


//    console.log(this); // This will give the global object in the browser as Window and in node it will give an empty object because in node the global object is not accessible using this keyword, so it will give an empty object.

// function coffee(){
//     let username = "Siraj"
//     console.log(this.username); // Works for objects but not for functions because the context of the function is not the object itself, so we cannot access the properties of the object using this keyword inside the function, so it will give undefined.
// }
// coffee();

// const coffee = () => {
//     let username="Sirajuddin"
//     console.log(this.username); // This will give undefined because arrow functions do not have their own this keyword, they inherit the this keyword from the parent scope, so in this case, the parent scope is the global scope, and in the global scope, there is no username property, so it will give undefined.
//     console.log(this); // Same as above, it will give the global object in the browser as Window and in node it will give an empty object because in node the global object is not accessible using this keyword, so it will give an empty object.
// }
// coffee();


// Explicit Return in Arrow Function
const addTwo = (num1,num2) =>{
    return num1 + num2
}


// Implicit Return in Arrow Function
const addTwo = (num1,num2) => (num1 + num2)
console.log(addTwo(5,5));

