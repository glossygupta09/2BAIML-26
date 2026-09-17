// class Hello{
//     constructor(){
//         console.log("Hello Constructor");
//     }
// }
// let h = new Hello();

// class Hello{
//     constructor(name){
//         this.empname = name;
//         console.log(empname);
//     }
// }
// let h  = new Hello();

// class Hello{
    
//         faculty = "vikas";
    
// }
// let h = new Hello();
// console.log(h.faculty);

// class Student{
//     constructor(roll, name, year){
//         this.rollNo = roll;
//         this.Name = name;
//         this.Year = year;
//         console.log(this.rollNo);
//         console.log(this.Name);
//         console.log(this.Year);
        
//     }
// }
// let s1 = new Student();
// let s2 = new Student(101, "vikas", "2nd");
// let s3 = new Student(102, "glossy", "2nd");

class Student{
    static fname = "vikas";
    static lname = "chaudhary";
    display(){
        console.log(Student.fname);
        console.log(Student.lname);
    }
}
// Student.display();
let s1 = new Student();
s1.display();