console.log("--Bank Account Management System--")

let bankAccount = {
    accName: "Glossy",
    accNumber: 43422646025,
    accBalance: 3000,

    depositAmount: function(amount){
        this.accBalance += amount;
        console.log(`Amount deposited:  ${this.accBalance}`);
    },
    withdrawAmount: function(amount){
        if(amount>this.accBalance){
            console.log("Insufficient balance");
        }
        else{
            this.accBalance-= amount;
            console.log(`Withdrawn amount: ${this.accBalance}`);
        }
        },
        display: function(){
            console.log("Name: " + this.accName);
            console.log("Account number: " + this.accNumber);
            console.log("Balance: " + this.accBalance);
            
            console.log("Current Balance: " + this.accBalance);
        }
};

console.log("Bank Holder Details: ");
bankAccount.display();
bankAccount.depositAmount(1000);
bankAccount.withdrawAmount(2000);
console.log("Account Balance: " + bankAccount.accBalance);
    