class Student{
    static name;
     rollNO;
    constructor(name, rollNo){
        name = name;
        rollNo = rollNo;
        console.log(name);
        console.log(rollNo);
    }
    display(){
        console.log(name);
        console.log(rollNo);
    }
}
let s1 = new Student("Glossy", 76);
s1.display();