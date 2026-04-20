// +++++++++++++++++ DAY 6 +++++++++++++++++

// 1. Basic SWITCH
 
let day = 2;

switch (day) {
    case 1:
        console.log("1. Monday");
        break;
    case 2:
        console.log("1. Tuesday");
        break;
    case 3:
        console.log("1. Wednesday");
        break;
    default:
        console.log("1. Invalid day");
}

 
// 2. SWITCH with STRING
 
let role = "admin";

switch (role) {
    case "admin":
        console.log("2. Full access");
        break;
    case "teacher":
        console.log("2. Can manage attendance");
        break;
    case "student":
        console.log("2. Can view dashboard");
        break;
    default:
        console.log("2. No access");
}

 
// 3. Multiple CASES (same output)
 
let fruit = "apple";

switch (fruit) {
    case "apple":
    case "banana":
    case "mango":
        console.log("3. This is a fruit");
        break;
    default:
        console.log("3. Unknown item");
}

 
// 4. SWITCH WITHOUT BREAK (Fall-through)
 
let num = 1;

switch (num) {
    case 1:
        console.log("4. One");
    case 2:
        console.log("4. Two");
    case 3:
        console.log("4. Three");
        break;
    default:
        console.log("4. Done");
}

 
// 5. SWITCH with EXPRESSIONS
 
let marks = 85;

switch (true) {
    case (marks >= 90):
        console.log("5. Grade A");
        break;
    case (marks >= 75):
        console.log("5. Grade B");
        break;
    case (marks >= 50):
        console.log("5. Grade C");
        break;
    default:
        console.log("5. Fail");
}

 
// 6. Calculator Example
 
let num1 = 10;
let num2 = 5;
let operator = "+";

switch (operator) {
    case "+":
        console.log("6. Result:", num1 + num2);
        break;
    case "-":
        console.log("6. Result:", num1 - num2);
        break;
    case "*":
        console.log("6. Result:", num1 * num2);
        break;
    case "/":
        console.log("6. Result:", num1 / num2);
        break;
    default:
        console.log("6. Invalid operator");
}

 
// 7. Login Role System (Project Type)
 
let userRole = "teacher";

switch (userRole) {
    case "admin":
        console.log("7. Access: Full control");
        break;
    case "teacher":
        console.log("7. Access: Start attendance, generate reports");
        break;
    case "student":
        console.log("7. Access: Mark attendance");
        break;
    default:
        console.log("7. Access denied");
}

 
// 8. Month Days Example
 
let month = "February";

switch (month) {
    case "January":
    case "March":
    case "May":
        console.log("8. 31 days");
        break;
    case "April":
    case "June":
        console.log("8. 30 days");
        break;
    case "February":
        console.log("8. 28 or 29 days");
        break;
    default:
        console.log("8. Invalid month");
}

 
// 9. Traffic Light System
 
let signal = "green";

switch (signal) {
    case "red":
        console.log("9. Stop");
        break;
    case "yellow":
        console.log("9. Get Ready");
        break;
    case "green":
        console.log("9. Go");
        break;
    default:
        console.log("9. Invalid signal");
}

 
// 10. Truthy Condition with SWITCH
 
let isLoggedIn = true;

switch (isLoggedIn) {
    case true:
        console.log("10. User logged in");
        break;
    case false:
        console.log("10. Please login");
        break;
}

 
// 11. Nested SWITCH
 
let category = "electronics";
let product = "mobile";

switch (category) {
    case "electronics":
        switch (product) {
            case "mobile":
                console.log("11. Electronics -> Mobile");
                break;
            case "laptop":
                console.log("11. Electronics -> Laptop");
                break;
            default:
                console.log("11. Unknown product");
        }
        break;

    case "clothing":
        console.log("11. Clothing category");
        break;

    default:
        console.log("11. Unknown category");
}

 
// 12. Backend Style API Status Code
 
let statusCode = 404;

switch (statusCode) {
    case 200:
        console.log("12. OK");
        break;
    case 201:
        console.log("12. Created");
        break;
    case 400:
        console.log("12. Bad Request");
        break;
    case 404:
        console.log("12. Not Found");
        break;
    case 500:
        console.log("12. Server Error");
        break;
    default:
        console.log("12. Unknown Status");
}