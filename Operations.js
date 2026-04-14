// Arithematic Operations 
let value = 3
let negValue = -value
// console.log(negValue);
// console.log(typeof negValue);

let str1 = "Hello "
let str2 = "Siraj"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); //JS auto converts 2 to "2" and then concatenates
console.log(1 + 2 + "2"); //JS first adds 1 and 2 to get 3 and then concatenates "2" to get "32"
console.log(typeof true);
console.log(+""); //JS converts "" to 0 and then applies unary plus to get 0
console.log(+"33"); //JS converts "33" to 33 and then applies unary plus to get 33

let gameCounter = 100
gameCounter++; // post increment, gameCounter is now 101
console.log(gameCounter);