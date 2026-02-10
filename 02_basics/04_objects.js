//const tinderuser1 = new Object() // ->singleton object
const tinderuser2 ={} // -> non singleton onject
tinderuser2.name = "manish"
tinderuser2.id= 1
tinderuser2.isLoggedin = true

// console.log(tinderuser2);

//-->
const regularuser = {
    email : "manish@gmail.com",
    fullname : {
        first_name : 'manish',
        last_name : 'kashyap'
    }

}
//console.log(regularuser.fullname);  //we can access the nested info through this 

// #object.assign() -> it is a static method that copies all enuremable own properties of one or more source object to a target objects.
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

//const obj4 = {obj1,obj2} //if we use this for combining then this will treat them as individually objects in a object itself
//console.log(obj4); // o/p -> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4);

// "..."->spread operator : also used to combine multiple diffrerent object 
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4 );

//operations of accessing values from objects
// console.log(tinderuser2); //it prints the whole object key value pair 
// console.log(Object.keys(tinderuser2)); // it prints the all keys possible in the object
// console.log(Object.values(tinderuser2)); //it prints the all values in the object
// console.log(Object.entries(tinderuser2)); //it prints all the entries made in the object
// console.log(tinderuser2.hasOwnProperty('id')); // to check whether the key present in the object or not

// ---------- Destructuring of objects -------------- 

const course = {
    coursename : "js in hindi",
    courseinstructor : "hitesh",
    price : "999"
}
// console.log(course.courseinstructor); // basic and most used method 

const {courseinstructor : instructor} = course  // another method
// console.log(instructor);

//--->json format 

//-------------------1st type of json format
// {
//     "name" : "manish",
//     "age" : "22",
//     "city" : "aligarh"
// }

//-------------------2nd type json format
[
    {},
    {},
    {}
]

