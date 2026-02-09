const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

//. # push operator
// marvel_heroes.push(dc_heroes) // it will add the second array as an last element in the first array
// console.log(marvel_heroes)

// # concat operator
// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

// # concat operator has limitation that it can only combine 2 arrays
// so for overcome from this we have spread operation

// # spread operator
// const all_new_heroes = [...marvel_heroes , ...dc_heroes]
// console.log(all_new_heroes);

//flat operator : it uses to join the nested arrays element into as an element of the original array by providing a depth 
// const without_flatArray = [1,2,3,[4,5,6],7,8,[9,10,11,[12,13,14,[15,16,17]]]]
// const after_flatArray = without_flatArray.flat(2)
// console.log(after_flatArray);

//Array.isArray() : to check whether the given is array or not
console.log(Array.isArray("Manish"));

//Array.from() : used to convert into array 
// console.log(Array.from("Manish"))
// console.log(Array.from({name : 'Manish'})); // interesting ! because in this case of key value pair first we have to give info about which should be convert into arrat key or value

//Array.of() : used to combine the different elements or array into a single array
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

 








