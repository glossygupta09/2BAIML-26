console.log("----EXP-1----");

class Student{
    static count =0;
    constructor(name, rollNo, marks){
        this.name = name;
        this.marks = marks;
        this.rollNo = rollNo;
        Student.count++;

    }
    displayResult(){
        console.log(this.name);
         console.log(this.rollNo);
          console.log(this.marks);
          if(this.marks>=35){
            console.log("PASS");
          }
          else{
            console.log("FAIL");
          }
    }
}
let s1 = new Student("Glossy", 76, 85);
let s2 = new Student("Trisha", 56, 70);
let s3 = new Student("Angel", 30, 90);
s1.displayResult();
s2.displayResult();
s3.displayResult();
console.log(Student.count);