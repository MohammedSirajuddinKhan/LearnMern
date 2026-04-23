// // for of loop works on iterable objects like arrays, strings, maps, sets, etc.

// const arr =[1,2,3,4,5];
// for (const i of arr) {
//     console.log(i);
// }

// const greetings = "Hello, World!"
// for (const greet of greetings) {
//     console.log(greet);
// }

// // Maps store key-value pairs and are iterable, so we can use for of loop to iterate over them. Not like objects, maps maintain the order of insertion and allow us to iterate over their entries in a predictable manner. We can use destructuring assignment to access the key and value of each entry in the map during iteration.

// const map=new Map();
// map.set("IN","India");
// map.set("US","United States");
// map.set("UK","United Kingdom");
// map.set("FR","France");
// map.set("GR","Germany");
// map.set("IT","Italy");

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key,':-',value);
    
// }

// // Objects are not iterable, so we cannot use for of loop to iterate over them directly. However, we can use Object.keys(), Object.values(), or Object.entries() to get an array of keys, values, or key-value pairs from the object and then use for of loop to iterate over that array.

// const myObj = {
//     'game1': 'NFS',
//     'game2': 'FIFA',
//     'game3': 'GTA',
//     'game4': 'COD',
//     'game5': 'BGMI'
// }
// for (const [key,value] of Object.entries(myObj)) {
//     console.log(key,':-',value);
// }


// // forEach is a method available on arrays that allows us to execute a provided function once for each array element. It is a higher-order function that takes a callback function as an argument and applies it to each element in the array. The callback function can take up to three arguments: the current element being processed, the index of the current element, and the array itself.
// const coding = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go'];
// coding.forEach(item => {
// console.log(item);
// });
// console.log("++++++++++++++++++++++++++++++++++++++++++++");


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)
// console.log("++++++++++++++++++++++++++++++++++++++++++++");


// Mostly used in Database calls
/*
const myCoding = [
    {
        language: "JavaScript",
        languageFileName:"JS"
    },
    {
        language: "Python",
        languageFileName:"PY"   
    },
    {
        language: "Java",
        languageFileName:"JAVA"
    }
]

myCoding.forEach((item)=> {
    console.log(item.language);
})
    */