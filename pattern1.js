<<<<<<< HEAD
Pattern = star=> {
    return `${star}`;
}
console.log("*");
console.log("**");
console.log("***");

Pattern = number=> {
    return `${number}`;
}
console.log("1");
console.log("12");
console.log("123");

Pattern = (n)=>{
    for(let i=1; i<=n; i++)
    {
        let row ="";
        for(let j=1; j<=i; j++)
        {
            row += "*";
        }
        console.log(row);
    }
};
Pattern(3);
=======
Pattern = star=> {
    return `${star}`;
}
console.log("*");
console.log("**");
console.log("***");

Pattern = number=> {
    return `${number}`;
}
console.log("1");
console.log("12");
console.log("123");

Pattern = (n)=>{
    for(let i=1; i<=n; i++)
    {
        let row ="";
        for(let j=1; j<=i; j++)
        {
            row += "*";
        }
        console.log(row);
    }
};
Pattern(3);
>>>>>>> c3cdacb12a919935ccde1386c0318ac49dd9fa92
