//-----> function intialisation
function saymyname(){
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("i");
    console.log("s");
    console.log("h");
}

// saymyname //--> it is just a reference of function : does not give any output just used for referencing
// saymyname() // --> it is execution of function 

// function addtwonum(number1,number2){ //here number1 & number2 are parameters
//     console.log(number1+number2);
// }

// const result = addtwonum(2,4) //here 2 & 3 are arguments
// console.log("result",result); // output -> result undefined

// here comes the real problem -> we have not stored num1+num2 anywhere 

function addtwonum(num1,num2){
    return num1+num2
}
const result = addtwonum(3,5)
// console.log("results :",result); // here we first return the reuslt in the function so it can be passed in the reuslt

function loginuser(username){
    if(/* !username */ username===undefined){ // this if condition is used for checking whether the username is enter or not 
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginuser("manish"));

function calculationcartprice(...num1){
    return num1
}
console.log();
