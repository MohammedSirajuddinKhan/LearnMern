function add2numbers(a,b) // (a,b) are parameters
{
return a+b; // When returned nothing, the function will return undefined by default so we have and have to return something
//console.log("Siraj"); // This will never be printed because the function will return before this line is executed
}
//console.log(add2numbers(5,10)); // (5,10) are arguments


function loginusermsg(username = "user") //Default paramereter is user, if we do not pass any argument to the function, it will take the default value of user
{
    console.log(`${username} just logged in`);
}
// loginusermsg(); // If we do not pass any argument, it will take the default value of user
// loginusermsg("Siraj");

function calculateCartPrice(...num1) //Rest operator is used to take multiple arguments and store them in an array, we can use this when we do not know how many arguments we will pass to the function
{
return num1
}
console.log(calculateCartPrice(200,400,600));

function calculateCartPrice(val1,val2,...num1) //val1 gets the value of 200, val2 gets the value of 300 and num1 gets the rest of the values in an array
{
    return num1
}
console.log(calculateCartPrice(200,300,400,500,100));

const user={
    username:"Siraj",
    price:99
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);
handleObject({
    username:"Sam",
    price:"39"
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]; // This will return the second value of the array as it is the parameter of the function and we are accessing the second value of the array using the index
}
console.log(returnSecondValue(myNewArray));