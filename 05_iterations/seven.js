//------------------map : Returns a new array by modifying every element

const mynumber = [1,2,3,4,5,6,7,8,9,10]
// const newnum = mynumber.map((num)=>num+10)
// console.log(newnum);
// o/p : 
// [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]

//----------------- chaining :  Chaining means calling multiple methods one after another in a single line

const newnum = mynumber
.map((num)=>num+10)
.filter((num)=>num>15)
console.log( newnum); // o/p : [ 16, 17, 18, 19, 20 ]
