import Account from "./Account.js"
class SA extends Account{
    min_bal=500
    constructor(id,name,email,amount, address){
        super(name,email,address)
        this.acc_id=id
        this.amount=amount
    }
    deposit(amount){
        this.acc_bal=this.acc_bal+amount;
    }
    withdraw(amount){
        this.acc_bal=this.acc_bal-amount;
    }
    get_bal(amount){
       return this.acc_bal-this.min_bal
        }

}