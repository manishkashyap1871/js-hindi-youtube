// Dates

let mydates = new Date() // always remember that date is treating as #object
console.log(mydates); // -> 2026-02-05T14:45:44.070Z
console.log(mydates.toString()); // -> Thu Feb 05 2026 14:45:44 GMT+0000 (Coordinated Universal Time)
console.log(mydates.toDateString()); // -> Thu Feb 05 2026
console.log(mydates.toISOString()); // -> 2026-02-05T14:45:44.070Z
console.log(mydates.toJSON()); // -> 2026-02-05T14:45:44.070Z
console.log(mydates.toLocaleDateString()); // -> 2/5/2026
console.log(mydates.toLocaleTimeString()); // -> 2:45:44 PM

// Methods for mentioning specific date 
// let mycreatedDates = new Date(2025,0,23) // in js months start from 0 not 1 ;  0->january
// let mycreatedDates = new Date(2025,0,23,5,3,)
// let mycreatedDates = new Date("2025-02-28")
// let mycreatedDates = new Date("02-23-2025")
// console.log(mycreatedDates.toLocaleString());

//-------- TIMESTAMP-------------
// let myTimeStamp = Date.now() // it give timestamp for any date to current time
// console.log(myTimeStamp);
// console.log(mycreatedDates.getDate()); //->it return the date "23"
// console.log(mycreatedDates.getDay()); //->it returns the day "0"->sunday
// console.log(mycreatedDates.getMonth()); // it returns 1 -> february











