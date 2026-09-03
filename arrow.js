console.log("---ARROW FUNCTION---");

// function Hello(){
//     console.log("hello glossy");
// }

// let Hello = function(){
//     console.log("hello glossy");
// }

function Physics(marks){
    return `${marks}`;
}
Physics = marks=>{
 return `${marks}`;
}
console.log(Physics(95));

FullName = (first, last)=>{
    return `${first}${last}`;
}