// first let us understand the problem of scope of "var"
// if(true){
//     let a=10
//     const b=20
//     var c=30
// }
//console.log(a); // o/p -> ReferenceError: a is not defined
//console.log(b); // o/p -> ReferenceError: b is not defined
//console.log(c); // o/p -> 30 , here the problem starts that it is giving the output out of its block scope

// solution for this problem
let a = 100 //global scope
if(true){
    let a=10. //block scope
    const b=20
    //console.log(`inner a is ${a}`);
}
//console.log(a); // o/p -> inner a is 10 
//                //.       100

// now let us uderstand about the scopes with nested functions
function one() {
    const username = "manish"
    function two(){
        const website = "manish.com"
        console.log(username);
    }
    //console.log(website); // -> ReferenceError: website is not defined
    two()
}
// one() // without using this "two()" doesn't run because it is nested in one() so without execution of one() , two() can never be executed

// let us take one more example
if(true){
    const username = "manish"
    if(username==="manish"){
        const website = " youtube"
        console.log(username+website);
    }
    //console.log(website); //-> ReferenceError: website is not defined    
}
//console.log(username); // -> ReferenceError: username is not defined


//----------------------interesting-------------------

