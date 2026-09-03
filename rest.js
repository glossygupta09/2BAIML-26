console.log("---REST OPERATOR---");

// function Sum(...values){
//     console.log(values);
// }
// Sum(10, 20);
// Sum(10, 100, 1000);

function sum(...values){
    let total =0;
    for(let n of values){
        total += n;
    }
    return total;
}
console.log(total);
sum(1,2,3);
sum(12,34,56);