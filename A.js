// console.log("==== Variables ====");
//     let text = "Something";
//     console.log(text);;

// let a=20;
// let b=30;
// if(a>b){
//     console.log("A is greater, A=", a);
// }
// else{
//     console.log("B is greater, B=", b);
// }

// function abes(){
//     console.log("Welcome STUDENTS");
//     console.log("Welcome to A.js");
// }
// abes();

// console.log("==Function with parameter==");
// function greet(fname, lname){
//     console.log("Hello", fname, lname);
// }
// greet("Glossy", "Gupta");
// greet("Angel", "Gupta");

// console.log("===Function Return===");

// function add(x,y){
//     return x+y;
// }
// let result = add(20,30);
// console.log("Sum = ", result);

// console.log("===default arguments===");

// function fullname(fname = "ABES", lname = "Engineering College"){
//     return fname+" "+lname;
// }
// console.log(fullname());
// console.log("hello", "glossy");

// console.log("===percentage===");

// function totalmarks(maths, english, hindi){
//     return maths+english+hindi;
// }
// function percentage(total){
//     return (total/300)*100;
// }

// let total = totalmarks(80,98,79);
// console.log("Total= ", total);
// console.log(percentage(total)="%");

// console.log("===Local variable===");
// function department(){

// }

// console.log("==while loop==");
// let count = 1;
// while(count<=10){
// console.log(count);

// count++;
// }

// console.log("==do-while loop==");
// let num =1;
// do{
//     console.log("Node class");
//         num++;
    
// }
// while(num<=5);

// console.log("==array==");

// let arr = [10,20,30];
// let sum =0;
// for(let index=0; index<arr.length; index++){
//     console.log(arr[index]);
//     sum += arr[index];
// }
// console.log("sum= ", sum);

// console.log("==mix array==");
// let arr2= 

console.log("==2D array==");

let num = [[1,2,3], [5,6,7], [8,9,10]];
for(let index=0; index<num.length; index++){
    for(let index1=0; index1<num.length; index1++){
        console.log(num[index][index1]);
    }
}
console.log("-----");

console.log("==Object==");
const student = {
    id:101,
    name:"Glossy",
    course:"A.js"

};
console.log(student);