// singleton

// object literals

const mySym = Symbol("key1");

const JsUser={name:"Sirajuddin",
    age:"25",
    "full name":"Mohammed Sirajuddin Khan",
    location:"Thane",
    [mySym]:"mykey1", // Interview question
    Hobbies:["Coding","Gaming"],
    email:"siraj@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday","Wednesday"],
}
console.log(JsUser.age);
console.log(JsUser["age"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email="sirajupdated@google.com";
// Object.freeze(JsUser);
JsUser.email="sirajuddin@google.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log(`Hello ${this.name}, you are ${this.age} years old today!`);
}
JsUser.greeting();
