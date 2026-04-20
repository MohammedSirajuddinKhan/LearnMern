// +++++++++++++++++ DAY 1 +++++++++++++++++

// Primitive Datatypes
// Cheat Code => N N S S B B U
// N - Number & Null
// S - String & Symbol
// B - Boolean & BigInt
// U - Undefined

const score =100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; //Undefined

const id=Symbol('123')
const anotherID=Symbol('123')
// console.log(id==anotherID); // false because symbol is unique and returned value is not the same even if the description is same

const bigNumber=9007199254740991n


// Reference Datatypes (Non-Primitive Datatypes) --> Directly stores in the memory and it can be changed
// Array, Object, Functions 
const heroes = ["Superman","Batman","Flash"];//Arrays
let myHero = {
    name:"Bruce Wayne", 
    age: 35,
    power: "Rich"
} //Object

const myFunction = function(){
    console.log("Hello World..!");
    
} //Function
myFunction() //Need to call everything