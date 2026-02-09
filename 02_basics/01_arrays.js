// array

//documentation link -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myARR = [0,1,2,3,4,5,6] // initialisation of array in js
const myheroes = new Array('manish', 'loves' ,'coding', 'so', 'much') // anoter method of the initialisation of the array

// console.log(myARR);
// console.log(myheroes);
// console.log(typeof myheroes);
// console.log(myARR[0]);

//---------------------- Array Method------------------

//myARR.push("manish") // adds element in the end of the array
//myARR.pop() //it removes the last element of the array

//myARR.unshift(9) // it adds the elements on the first index of the array
//myARR.shift() // it removes the first element of the array
// console.log(myARR);

// console.log(myARR.includes(5)); // it checks if the element is present in the array or not 

// const newArr = myARR.join() //join()-> join two arrays but it changes the result into string form 


//---------slice , splice

console.log("A", myARR); // here we are printing the original array
const newArr = myARR.slice(1,3) // here ew are intialising a new another array by slicing the old array 
console.log(newArr); // printing the new array which if formed by slicing the old array

console.log("B", myARR); // printing the original array

const newArr2 = myARR.splice(1,3) // here we are using the splice for intialising a new array by the use of an old array
console.log(newArr2); // printing the second new array for getting the diiference in both slice and splice
console.log("C", myARR); //printing original array 3rd time

// # now from the above result we can see the difference b/w the slice and splice that slice just make chnages in the duplicate without changing the original array but splice cut the orginal array







