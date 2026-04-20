// Immediately Invoked Function Expression (IIFE)
// IIFE is a function that is executed immediately after it is defined.

// Named IIFE
(function chai(){
    console.log(`DB Connected`);
})();

//To avoid global scope pollution, we can use IIFE to create a new scope for our variables and functions, so that they do not interfere with the global scope and other functions and variables in the code. This is a good practice to avoid naming conflicts and to keep our code organized and modular.


// Unnamed IIFE
(()=>{console.log(`Function without a funcion name using IIFE`);
})(); // Semi colon is added to the end to stop the context of the function from being mixed with the next line of code.


// Unnamed IIFE with parameters
((name)=>{
    console.log(`Hello ${name} bhaisaab`);
    
})("Sirajuddin"); // The second () is used to pass the arguments to the function.