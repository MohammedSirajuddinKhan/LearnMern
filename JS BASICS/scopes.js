// // Scopes are a way to control the visibility and accessibility of variables and functions in JavaScript.

// var c = 300;

// if (true) {
// let a=10
// const b=20
// var c=30
// }

// //console.log(a); // This will give an error because a is declared with let and it is block scoped, so it is not accessible outside the block

// //console.log(b); // This will give an error because b is declared with const and it is block scoped, so it is not accessible outside the block

// console.log(c); // This will print 30 because c is declared with var and it is function scoped, so it is accessible outside the block but not outside the function


function one(){
    const username="Sirajuddin"

    function two(){
        const website="youtube.com"
        //console.log(username);
    }
//    console.log(website); //cannot access website because it is declared inside the function two and it is not accessible outside the function two

    two()

}
one()

if (true) {
    const username="Sirajuddin"
    if (username === "Sirajuddin") {
        const website="youtube.com"
//        console.log(username,website);
    }
//    console.log(website);    //cannot access website because it is declared inside the if block and it is not accessible outside the if block
}
//console.log(username);// This will give an error because username is declared inside the if block and it is not accessible outside the if block

// +++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++

console.log(addone(5)) // This will run because of hoisting, the function declaration is hoisted to the top of the scope, so we can call the function before it is declared
function addone(num){
    return num + 1
}

const addTwo = function(num){
    return num + 2
}
console.log((addTwo(5))); // This will give an error because addTwo is a function expression and it is not hoisted, so we cannot call the function before it is declared