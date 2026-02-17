// Immediately invoked function expression (IIFE) : suntax => ()()

//-------------- Normal function
// function chai(){
//     console.log(`DB connected `)
// }
// chai()

// sometimes because of global scope variables pollution there has been problem occur so from saving from this we use iife to just execute the function immediately 

// ------------- IIFE function

// normal function -> iife function
(function chai(){
    console.log(`DB connected `);
})(); // here ";" is mandatory because to stop the execution of the function
      // if we don't use ; then next funtion execution give error 

// arrow function -> iife function
(() =>{
    console.log("DB connected two")
})();

// arrow funtion -> iife function -> with passing parameters
((name ) =>{
    console.log(`hello ${name}`)
})("manish");


