console.log("This is a link to JS EXECUTION CONTEXT AND CALLSTACK: "+"https://www.youtube.com/watch?v=ByhtOgF6uYM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=25");


// Execution Context is the environment in which the JavaScript code is executed. It is created when a function is called and destroyed when the function returns. It contains information about the variables, functions, and objects that are currently in scope.

// There are three types of execution context in JavaScript:
// 1. Global Execution Context: This is the default execution context that is created when the JavaScript code is executed. It contains the global object and the global scope.
// 2. Function Execution Context: This is created when a function is called. It contains the local variables, parameters, and the value of 'this' keyword.
// 3. Eval Execution Context: This is created when the eval() function is called. It contains the code that is executed by the eval() function.

// The execution context is created in three phases:
// 1. Creation Phase: In this phase, the execution context is created and the variables and functions are hoisted. The variables are initialized with undefined and the functions are stored in memory.
// 2. Execution Phase: In this phase, the code is executed line by line and the variables and functions are assigned their values.
// 3. Destruction Phase: In this phase, the execution context is destroyed and the memory is freed.

// The major difference between the global execution context and the function execution context is that the global execution context is created only once and it is shared by all the functions, while the function execution context is created every time a function is called and it is unique to that function. The global execution context has access to all the variables and functions in the global scope, while the function execution context has access only to the variables and functions in its own scope and the global scope.

// Call Stack is a data structure that keeps track of the function calls in a program. It is used to manage the execution context and to keep track of the order of function calls. When a function is called, a new execution context is created and pushed onto the call stack. When the function returns, the execution context is popped from the call stack and the control is returned to the previous execution context.