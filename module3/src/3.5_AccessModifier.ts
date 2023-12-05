{
    // 3.5_AccessModifier.ts

    //readonly | private (_private) child & instance cannot access  | protect -> only child cannot access

    class BankAccount {
        constructor(public readonly id: number, public readonly name: string, private _balance: number){

        }
        showDetails(){
            console.log(`This is a Bank Account of ${this.name} | Balance = ${this._balance}.`);
        }

        addDeposit(amountOfMoney : number){
            this._balance = this._balance + amountOfMoney;
            console.log(`${amountOfMoney}tk Deposite successfully done! new Balance is ${this._balance}tk`)
        }
    }

    const poorAccount = new BankAccount(101,"Tuhin",20);
    console.log(poorAccount.id);
    console.log(poorAccount.name);
    // console.log(poorAccount.balance);
    poorAccount.addDeposit(100);
    poorAccount.showDetails();


    class StudentAccount extends BankAccount{
        test(){
            this.addDeposit(100);
        }
    }




}