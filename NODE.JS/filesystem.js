const fs = require("fs");

const readFile =fs.readFile('./file.txt','utf-8',(err,data)=>{
    console.log(err,data);
    console.log("This is async");
    
}) // asynchronous read file
console.log(readFile);

const readFileSync = fs.readFileSync('./file.txt','utf-8',(err,data)=>{
    console.log(err,data);
    console.log("This is sync");
}); // synchronous read file
console.log(readFileSync);

fs.writeFile('file.txt','This is written by `fs.writeFile` using Node.js',(err,data)=>{
    console.log(err,data);
  // Asynchronous write file  
})

fs.writeFileSync('file.txt','This is written by `fs.writeFileSync` using Node.js',(err,data)=>{
    console.log(err,data);
  // Synchronous write file  
})