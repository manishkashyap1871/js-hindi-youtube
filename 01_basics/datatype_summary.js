//  ----------->primitive datatypes 

// 7 Types --> string , number, Boolean, Null, Undefined, Symbol, BigInt

// # JavaScript is a Dynamically Typed Language ✅
// This means you do NOT need to specify the type of a variable — it is determined at runtime.
// Example :
// let x = 10;      // number
// x = "hello";     // now string (no error)
// x = true;        // now boolean (still no error)

// ------------->reference (Non primtive)
// Array , Objects, Functions

// example 

//--Array
 const  heroes =["shaktiman", "spiderman", "avengers"]
//--Object
let myobj ={
    name: "Manish",
    age : 22
}
//--function
const myfunction = function(){
    console.log("hello");
}

console.log(typeof heroes); //--> object
console.log(typeof myfunction); //-->function
console.log(typeof myobj); //-->object

// # all non primtive datatype return their object as their type 

//source to study : https://262.ecma-international.org/5.1/#sec-11.4.3


