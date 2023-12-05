{
    // 3.6_GetterAndSetter.ts

    // Setter | Getter 

    class BankAccount {
        constructor(public readonly id: number, public readonly name: string, private _balance: number){

        }

        //getter
        get showDetails(){
            return console.log(` Get - This is a Bank Account of ${this.name} | Balance = ${this._balance}.`);
        }

        // showDetails(){
        //     console.log(`This is a Bank Account of ${this.name} | Balance = ${this._balance}.`);
        // }

        set addDeposit(amountOfMoney : number){
            this._balance = this._balance + amountOfMoney;
            console.log(`set - ${amountOfMoney}tk Deposite successfully done! new Balance is ${this._balance}tk`);
        }
        // addDeposit(amountOfMoney : number){
        //     this._balance = this._balance + amountOfMoney;
        //     console.log(`${amountOfMoney}tk Deposite successfully done! new Balance is ${this._balance}tk`)
        // }
    }

    const poorAccount = new BankAccount(101,"Tuhin",20);
    console.log(poorAccount.id);
    console.log(poorAccount.name);
    // console.log(poorAccount.balance);
    // poorAccount.addDeposit(100); //function call korte hhcce
    // poorAccount.showDetails(); //function call korte hhcce
    poorAccount.addDeposit = 200;
    poorAccount.showDetails;


    class StudentAccount extends BankAccount{
        test(){
            // this.addDeposit(100);
        }
    }




    
}