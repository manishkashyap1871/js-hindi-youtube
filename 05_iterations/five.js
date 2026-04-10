const coding = ["js","ruby","java","python","cpp"]

//for using foreach() loop we have to declare a callback function to it every time
//function is callback so need to declare the function name
coding.forEach(function(val){ 
    //console.log(val);
})
// o/p :
// js
// ruby
// java
// python
// cpp


//we can also declare a arrow funtion in foreach()
coding.forEach((item)=>{
   // console.log(item); 
})
// o/p:
// js
// ruby
// java
// python
// cpp

// we can also used refernce funtion
function printme(lang){
    console.log(lang);
}
//coding.forEach(printme)

//o/p:
// js
// ruby
// java
// python
// cpp

//in declaring the callback function there are so many parameteres not only key
coding.forEach((key,index,arr)=>{
    console.log(key,index,arr);
})
// o/p:
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

// sometimes array consist of many objects in it
// [{},{},{}] : example syntax

const mycoding = [
    {
        languagename : "javascirpt",
        languagefilename : "js"
    },
    {
        languagename : "java",
        languagefilename :"java"
    },
    {
        languagename : "pyhton",
        languagefilename :"py"
    }
]
mycoding.forEach((key)=>{
    console.log(key.languagefilename);    
})
// o/p:
// js
// java
// py