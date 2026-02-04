const name = "manish"
const repoCount = 50

console.log(name + repoCount); //it is the old method of printing and adding the strings
console.log(`hello my name is ${name.toUpperCase()} and my repocount is ${repoCount}`); // modern method of printing and joining the strings

const myname = new String("manish") // another method of decalring a string
console.log(myname);
//there are various protocol of key value pair and accessing them for different uses some of them are :
console.log(myname[0]); // accessing key value pair
console.log(myname.toUpperCase()); // to convert in uppercase 
console.log(myname.indexOf('i')); // to access the position of char
console.log(myname.charAt(0)); // accessing char at position

let newstirng = myname.substring(0,3) //dividing into substring :it will primt char at -> 0,1,2(excluding chat at 3)
console.log(newstirng);

let newstirng2 = myname.slice(-1,3) // it will consider negative value also which is not consider by substring
console.log(newstirng2);

let newstring3 = "   manish.   "
console.log(newstring3);
console.log(newstring3.trim()); //trim removes the extra spaces given by user 
// trim are of two type --> start trim and end trim 

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-')) // used for replacing  
console.log(url.includes('hitesh')) //check if it is present or not
console.log(url.split('e')); // used to splits string from a specific points









