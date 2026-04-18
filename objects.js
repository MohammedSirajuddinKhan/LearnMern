// object being declared as literals hence the name is OBJECT LITERAL

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
// console.log(JsUser.age);
// console.log(JsUser["age"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email="sirajupdated@google.com";
// Object.freeze(JsUser);
JsUser.email="sirajuddin@google.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log(`Hello ${this.name}, you are ${this.age} years old today!`);
}
// JsUser.greeting();


// Singleton Object

const tinderUser={}

tinderUser.id="123abc";
tinderUser.name="Siraj";
tinderUser.isLoggedIn="false";

//console.log(tinderUser);


const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Siraj",
            lastname:"Khan"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname?.userfullname.firstname); // API se response lete waqt aise hi hota hai, kabhi kabhi fullname nahi aata hai toh error aayega but with ? it will show undefined instead of error kyunki hamey guarantee nahi hota ki fullname aayega hi aayega toh isliye ? lagate hai taki error na aaye aur undefined show kare. (Varna IF ELSE lagana padta)


// OBJECT ASSIGNING OR MERGING

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}
const obj3=Object.assign(obj1,obj2)// Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object. In this case, obj1 is the target object and obj2 is the source object. The properties of obj2 will be copied to obj1, and obj1 will be returned as obj3. However, this will modify obj1 as well, since obj3 and obj1 reference the same object in memory. If we want to keep obj1 unchanged, we should use an empty object as the target for Object.assign(), like this: Object.assign({}, obj1, obj2).
// console.log(obj3);

const obj4=Object.assign({},obj1,obj2) // empty object is used to create a new object and then obj1 and obj2 are merged into it, so that obj1 and obj2 remain unchanged and we get a new object with the combined properties of both. If we directly assign obj1 and obj2 to obj3, then obj3 will reference the same memory location as obj1 and obj2, which means any changes made to obj3 will also affect obj1 and obj2. By using Object.assign({}, obj1, obj2), we create a new object that contains the properties of both obj1 and obj2 without modifying the original objects.
// console.log(obj4);


const obj5={name:"Siraj",age:25}
const obj6={name:"Siraj",age:25}
const obj7={...obj5,...obj6} // Spread operator is used to copy the properties of obj5 and obj6 into a new object obj7. It creates a new object with the combined properties of both obj5 and obj6. If there are any duplicate properties, the value from the last object will overwrite the previous one. In this case, since both obj5 and obj6 have the same properties with the same values, obj7 will have the same properties and values as obj5 and obj6.
// console.log(obj7);

// Jab database se values aayegi tab neechey waala tareeka use hoga
const users=[{
    id:1,
    email:"user1@gmail.com"
},
{
    id:1,
    email:"user2@gmail.com"
},{
    id:1,
    email:"user3@gmail.com"
},{
    id:1,
    email:"user4@gmail.com"
},{
    id:1,
    email:"user5@gmail.com"
}]

// console.log(users[0].email,users[2].email); // is tarah se hum email access kar sakte hai users array ke andar se, jismein har element ek object hai jismein id aur email properties hai. Hum index 0 ke through first user ke email ko access kar rahe hai.


//console.log(tinderUser);

//console.log(Object.keys(tinderUser));// Object.keys() method is used to get an array of the keys of an object. In this case, it will return an array of the keys of the tinderUser object, which are "id", "name", and "isLoggedIn".

//console.log(Object.values(tinderUser));// Object.values() method is used to get an array of the values of an object. In this case, it will return an array of the values of the tinderUser object, which are "123abc", "Siraj", and "false".

//console.log(Object.entries(tinderUser));// Object.entries() method is used to get an array of the key-value pairs of an object. In this case, it will return an array of the key-value pairs of the tinderUser object.

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));// hasOwnProperty() method is used to check if an object has a specific property as its own property (not inherited). In this case, it will return true if the tinderUser object has the property "isLoggedIn", and false otherwise.


// OBJECT DESTRUCTURING
const course={
    courseName:"JavaScript",
    price:"999",
    courseInstructor:"Sirajuddin"
}
//console.log(course.courseInstructor);// But this method is lengthy and we have to write course. again and again for each property we want to access. To avoid this, we can use object destructuring.

const {courseInstructor:instructor} = course;// Object destructuring is a syntax that allows us to extract properties from an object and assign them to variables in a more concise way. In this case, we are extracting the "courseInstructor" property from the "course" object and assigning it to a new variable called "instructor". The syntax {courseInstructor:instructor} means that we want to take the value of the "courseInstructor" property and assign it to a variable named "instructor". After this line of code, we can use the variable "instructor" to access the value of the "courseInstructor" property from the "course" object without having to write course.courseInstructor every time.

console.log(instructor); // Ab kaam aur asaan hogaya hai, hum directly instructor variable ko use kar sakte hai to access the value of courseInstructor property from the course object.


// API
