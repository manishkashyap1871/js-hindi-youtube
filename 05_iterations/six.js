const coding = ["js","ruby","java","python","cpp"]

// coding.forEach((item)=>{
//     console.log(item);    
// })
// o/p:
// js
// ruby
// java
// python
// cpp

// what if we want to store the value of for each ()
// const values =coding.forEach((item)=>{
       
// }) 
// console.log(values);
//o/p : undefined // because for each doesn't store any value forEach() is only for side effects, not for returning values

//if we want to store array value then this will be the one of the method : by the use of filter 
// const mynums = [1,2,3,4,5,6,7,8,9,10]
// let newnums = mynums.filter((num)=>num >4)
// console.log(newnums);

// we can also use "for each" for storing values of array but it is a not a efficient way
//so now implementing this for each for storing values of array
// const mynums = [1,2,3,4,5,6,7,8,9,10]
// const newnum = [] // we have to use a another empty array
// mynums.forEach((num)=>{
//     if(num>4){
//         newnum.push(num)
//     }
// })
// console.log(newnum); // o/p : [ 5, 6, 7, 8, 9, 10 ]

// now implementing filter on a object array 
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
];

// const userbooks = books.filter((book)=>book.genre==="History")
// console.log(userbooks);
// o/p:
// [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   },
//   {
//     title: 'Book Seven', 
//     genre: 'History',
//     publish: 1986,
//     edition: 1996
//   }
// ]
const getbook = books.filter((book) => {
    return book.publish >=1995 && book.genre=="History"
})
console.log(getbook);

