console.log("----EXP-2----");

class BankAccount{
    static bankName= "SBI";
    static minBal = 500;
    constructor(accNo, holName, bal){
        this.accNo = accNo;
        this.holName = holName;
        this.bal = bal;
    }
    
    deposit(amt){
        this.bal += amt;
        console.log(`Amount deposited:  ${this.bal}`);
    }
    withdraw(amt){
        if(amt>this.bal){
            console.log("Insufficient balance");
        }
        else{
            this.bal -= amt;
            console.log(`Withdrawn amount: ${this.bal}`);
        }
    }
    displayBal(){
        console.log("Account No  : " + this.accNo);
        console.log("Holder Name : " + this.holName);
        console.log("Balance     : " + this.bal);
    }
    static bankInfo(){
        console.log("Bank Name       : " + BankAccount.bankName);
        console.log("Minimum Balance : " + BankAccount.minBal);
    }

    }
    BankAccount.bankInfo();
const acc1 = new BankAccount(1001, "Aman ", 5000);
const acc2 = new BankAccount(1002, "Priya", 2000);
console.log("Transactions on Account 1001");
acc1.deposit(1500);
acc1.withdraw(2000);
acc1.withdraw(10000);
acc1.displayBal();
console.log("Transactions on Account 1002");
acc2.withdraw(500);
acc2.deposit(3000);
acc2.withdraw(6000);
acc2.displayBal();
