console.log("---REST OPERATOR---");

// function Sum(...values){
//     console.log(values);
// }
// Sum(10, 20);
// Sum(10, 100, 1000);

function sum(name,...values){
    let total =0;
    for(let n of values){
        total += n;
    }
    return total;
}
console.log(sum("glossy",10,20,25));



function sum(name,...values){
    let total =0;
    for(let n of values){
        total += n;
    }
    
 console.log("name:", name);
    return total;
    
}
console.log("total:", sum("glossy",10,20));