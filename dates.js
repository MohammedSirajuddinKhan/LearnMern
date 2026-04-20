// +++++++++++++++++ DAY 2 +++++++++++++++++

let myDate = new Date()
console.log(typeof myDate);

console.log(myDate.toString()); //Fri Jun 14 2024 12:00:00 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Fri Jun 14 2024
console.log(myDate.toLocaleString()); //6/14/2024, 12:00:00 PM

let myDate2 = new Date(2024, 5, 14) // month is 0-indexed
console.log(myDate2.toString()); //Fri Jun 14 2024 00:00:00 GMT+0000 (Coordinated Universal Time)