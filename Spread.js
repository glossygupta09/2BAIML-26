// console.log("SPREAD FUNCTION EXAMPLE");
// function sum(...values)
// {
//     let sum=0;
//     for (let i in values)
//     {
//         sum+=values[i];
//     }
//     console.log(sum);
// };
// let arr=[1,2,3,4,5];
// sum(arr);

function sum(name, rollno, ...values) {
    let total = 0;
    for (let value of values) {
        total += value;
    }
    console.log("Name:", name);
    console.log("Roll No:", rollno);
    console.log("Sum:", total);
}
sum("Divyanshu", 10, 20, 30, 40);
sum("Divyanshu", 7563853, 10, 20, 30, 40, 50);
let arr = [10, 20, 30, 40];
sum("Divyanshu", 7563853, ...arr);
arr.push(60);
console.log(arr);