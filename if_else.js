// +++++++++++++++++ DAY 6 +++++++++++++++++

// 1. Simple IF
 
let age1 = 20;

if (age1 >= 18) {
    console.log("1. You can vote");
}

 
// 2. IF...ELSE
 
let age2 = 16;

if (age2 >= 18) {
    console.log("2. You can vote");
} else {
    console.log("2. You cannot vote");
}

 
// 3. IF...ELSE IF...ELSE
 
let marks = 75;

if (marks >= 90) {
    console.log("3. Grade A");
} else if (marks >= 75) {
    console.log("3. Grade B");
} else if (marks >= 50) {
    console.log("3. Grade C");
} else {
    console.log("3. Fail");
}

 
// 4. Nested IF
 
let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn) {
    if (isAdmin) {
        console.log("4. Welcome Admin");
    } else {
        console.log("4. Welcome User");
    }
} else {
    console.log("4. Please login first");
}

 
// 5. Ternary Operator
 
let age3 = 20;

let result = (age3 >= 18) ? "5. Adult" : "5. Minor";
console.log(result);

 
// 6. Multiple Conditions (&& and ||)
 

// AND (&&)
let age4 = 25;
let hasLicense = true;

if (age4 >= 18 && hasLicense) {
    console.log("6. You can drive");
}

// OR (||)
let isAdmin2 = false;
let isEditor = true;

if (isAdmin2 || isEditor) {
    console.log("6. You can edit content");
}

 
// 7. Truthy / Falsy
// Falsy values: false, 0, "", null, undefined, NaN
// Truthy values: all other values including true, non-zero numbers, non-empty strings, objects, arrays
let username = "";

if (username) {
    console.log("7. Welcome " + username);
} else {
    console.log("7. Username is required");
}

 
// 8. Comparison (== vs ===)
 
let a = 5;
let b = "5";

if (a == b) {
    console.log("8. Equal (loose)");
}

if (a === b) {
    console.log("8. Equal (strict)");
} else {
    console.log("8. Not equal (strict)");
}

 
// 9. E-commerce Discount Example
 
let amount = 1200;
let isMember = true;

if (amount > 1000) {
    if (isMember) {
        console.log("9. You get 20% discount");
    } else {
        console.log("9. You get 10% discount");
    }
} else {
    console.log("9. No discount");
}

 
// 10. Login System Example
 
let email = "admin@gmail.com";
let password = "1234";

if (email === "admin@gmail.com" && password === "1234") {
    console.log("10. Login successful");
} else {
    console.log("10. Invalid credentials");
}

 
// 11. Role-Based Access
 
let role = "teacher";

if (role === "admin") {
    console.log("11. Full access");
} else if (role === "teacher") {
    console.log("11. Start attendance, view reports");
} else if (role === "student") {
    console.log("11. Mark attendance");
} else {
    console.log("11. No access");
}

 
// 12. Complex Condition
 
let temperature = 35;
let isRaining = false;

if (temperature > 30 && !isRaining) {
    console.log("12. It's hot and dry, go out!");
} else if (temperature > 30 && isRaining) {
    console.log("12. It's hot but raining");
} else {
    console.log("12. Weather is normal");
}