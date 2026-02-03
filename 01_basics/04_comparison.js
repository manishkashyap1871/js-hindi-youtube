//--------- Type1---------

// console.log(1==1);
// console.log(2>=1);
// console.log(3!=1);

//---------Type2----------

// console.log("2">1); //comparing different types may lead to wrong output that's why is it not adiviced to do it
// console.log("03"<2);

//--------Type3----------

// console.log(null > 0);   //false
// console.log(null < 0);   //false
// console.log(null ==0);   //false
// console.log(null >=0);   //true
// console.log(null <=0);   //true
// The reason is that an equality check == and comparisons ><>= < work differently.
// Comparisons convert null to a number, treating it as O.
// That's why null >= 0 is true and (1) null > 0 is false.

//---------Type4-----------
// "===" -> it also checks the type of datatype should be same that are comparing
console.log("2"===2);









