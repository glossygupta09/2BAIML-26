console.log("----EXP-3----");

class Employee{
    constructor(id, name, basicSal){
        this.id = id;
        this.name = name;
        this.basicSal = basicSal;
    }
    calculateSalary(){
    return this.basicSal;
}
displaySalary(){
    console.log("Employee ID : " + this.id);
    console.log("Employee Name : " + this.name);
    console.log("Employee Salary : " + this.calculateSalary());
}
}
class Manager extends Employee{
    constructor(id,name,basicSal,bonus){
        super(id,name,basicSal);
        this.bonus = bonus;
    }
    calculateSalary(){
        return this.basicSal + this.bonus;
    }
}
const emp1 = new Employee(101,"Glossy",50000);
const emp2 = new Employee(102,"Trishaa",60000);

const mgr1 = new Manager(201,"Rahul",70000,10000);
emp1.displaySalary();

