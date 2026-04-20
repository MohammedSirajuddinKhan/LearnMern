// +++++++++++++++++ DAY 2 +++++++++++++++++

// Stack(Primitive) gives copy & Heap(Reference or Non-Primitive) gives reference

let myYoutubeName = "www.Codevolution.com"; // Stored in Stack
let myName = myYoutubeName; // Copy of the value is stored in Stack
myName = "codewithwigga"
console.log(myYoutubeName);
console.log(myName);// Only this value is changed, myYoutubeName is not changed because it is stored in Stack and it gives copy of the value to myName

let userOne={
    email:"user@example.com",
    UPI:"user@upi"
}
let userTwo = userOne; // Reference of the object is stored in Heap
userTwo.email="user@gmail.com"
userTwo.UPI="user@notexample"
console.log("UserOne:",userOne);
console.log("UserTwo:",userTwo); // Both userOne and userTwo are changed because they are stored in Heap and they give reference of the object to each other. So, when we change the value of one variable, it changes the value of the other variable as well.
