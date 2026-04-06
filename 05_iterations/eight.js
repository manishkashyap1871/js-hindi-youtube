//----------------reduce method :  reduce() is used to reduce an array to a single value

// syntax :- 
// array.reduce((accumulator, currentValue) => {
//     return updatedValue;
// }, initialValue);

// here 	•	accumulator (acc) → stores result
// 	        •	currentValue (curr) → current element
// 	        •	initialValue → starting value

// now let us understand with example
const mynums = [1,2,3]

//------1 method to write
// const newnum = mynums.reduce(function(acc,curr){
//     return acc + curr
// },0)
// console.log(newnum); //o/p : 6

//------2 method to write
// const newnum = mynums.reduce((acc,curr)=>acc+curr,0)
// console.log(newnum); // o/p : 6

//----- real life use of reduce()
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);