// if 
// if conditions : <, >, >=, <=, ==, !=, ===
const isuserloggedin = true
// if(isuserloggedin){
//     console.log("executed"); // -> executed
// }
// if(2=="2"){
//     console.log("executed"); // -> executed
// }
// if(2==="2"){ //"===" : also checks for the same datatype
//     console.log("executed"); // -> it will not excute
// }

// const temp = 49
// if(temp>=50){
//     console.log("temp is good");
    
// }else{
//     console.log("temp is not good");
    
// }
// now let us understand about the scope by one example
// const score = 200
// if(score>100){
//     let power = "fly"
//     // but if we used var in place of let or const here then below statement can be print outside the block scope
//     console.log(`user power : ${power}`);  // -> user power : fly  
// }
// //console.log(`user power : ${power}`);    // ReferenceError: power is not defined (it is defined inside the block scope)

// const balance = 1000
// if(balance>500) console.log("test"),console.log("test 2"); // never use this type of implicit scope

const userloggedin = true
const debitcard = true
const student = true

if(userloggedin && debitcard && student){
    console.log("allow to buy courses");
    
}

const loggedinfromGoogle = true
const loggedinfromemail = true

if(loggedinfromGoogle || loggedinfromemail){
    console.log("user logged in");
    
}