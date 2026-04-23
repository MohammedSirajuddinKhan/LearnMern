// Loops are also known as Iteration statements or Iterators.

// for (let index = 0; index <= 10; index++) {
//     const element =index;
//     console.log(element);   
// }
//console.log(element); // Element is not accessible outside the loop because it is declared with let, which has block scope.

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <=10; j++) {
//         console.log(`Inner loop value: ${j} and inner loop ${i}`);
//     }
// }   

// Table from 0 to 10
// for (let i = 0; i <=10; i++) {
//     console.log( );
//     console.log(`Table of ${i} is as follows:`);
    
//     for (let j = 0; j <=10; j++) {
//         console.log(`${i} X ${j} = ${i*j}`);
//     }
// }


// for loop tends to work with arrays and objects.

// let myArray = ["flash", "superman", "batman", "wonder woman", "aquaman", "cyborg"];
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

/*
for (let i = 0; i <= 20; i++) {
    if (i==5) {
        console.log("Detected 5");
        break; // Break statement is used to exit the loop when a certain condition is met.
    }
    console.log(`Value of i is ${i}`);
}
    */

/*
for (let i = 0; i <= 20; i++) {
    if (i==5) {
        console.log("Detected 5");
        continue; // Continue statement is used to skip the current iteration when a certain condition is met.
    }
    console.log(`Value of i is ${i}`);
}
    */