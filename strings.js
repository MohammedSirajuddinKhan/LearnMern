// +++++++++++++++++ DAY 1 +++++++++++++++++

//Learn about strings in JavaScript to crack interviews mostly via MDN DOCUMENTATIONS like a professional developer. 

const name = "Sirajuddin"
const age = 12
console.log(`Hello my name is ${name} and my age is ${age}`); //Back Ticks provide String Interpolation giving access to ${}
console.log(name[0]); //Accessing
console.log(name.toUpperCase()); //Converting to uppercase
console.log(name.toLowerCase()); //Converting to lowercase
console.log(age.toString()); //Converting number to string
console.log(name.charAt(1)); //Accessing character at index 1
console.log(name.indexOf('S')); //Finding index of character 'S'

newName = name.substring(0, 5) //Extracting substring from index 0 to 5
console.log(newName);
console.log(name);

const url="https://www.sirajuddin.com/sirajuddin%20is%20a%20good%20boy"
const newUrl=url.replace('%20',"-");
console.log(newUrl);
