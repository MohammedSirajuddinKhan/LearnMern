/*
const myCoding =["js","python","java","c++","ruby","go"];
myCoding.forEach((item) => {
    console.log(item);
});
    */


// Filter is a method available on arrays that creates a new array with all elements that pass the test implemented by the provided function. It is a higher-order function that takes a callback function as an argument and applies it to each element in the array. The callback function should return a boolean value (true or false) indicating whether the element should be included in the new array or not.
// const myNums =[1,2,3,4,5,6,7,8,9,10];
// const myNewNums = myNums.filter((num)=>{
//     return num>4;
// })
// console.log(myNewNums);



// myNums.forEach((num)=>{
//     if (num>4) {
//         newNums.push(num);
//     }
// })
// console.log(newNums);


// Map is a method available on arrays that creates a new array populated with the results of calling a provided function on every element in the calling array. It is a higher-order function that takes a callback function as an argument and applies it to each element in the array. The callback function can take up to three arguments: the current element being processed, the index of the current element, and the array itself.
const newNumbers=[1,2,3,4,5,6,7,8,9,10];
const newNums = newNumbers.map((num)=>{
return num + 10
})
console.log(newNums);

// Reduce is a method available on arrays that executes a reducer function on each element of the array, resulting in a single output value. It is a higher-order function that takes a callback function as an argument and applies it to each element in the array. The callback function takes four arguments: the accumulator (the accumulated value previously returned in the last invocation of the callback), the current element being processed, the index of the current element, and the array itself. The reduce method also takes an optional initial value as a second argument, which is used as the first argument to the first call of the callback function. If no initial value is provided, the first element of the array is used as the initial accumulator value.

const myNums =[1,2,3,4,5];
const sum = myNums.reduce((j)=>{
    return i + j;
},0) // 0 is the initial value for the accumulator. If we don't provide it, the first element of the array (1 in this case) will be used as the initial value, and the reduce function will start from the second element (2 in this case).
console.log(sum);