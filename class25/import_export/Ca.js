import Account from "./Account.js"
class CA extends Account{
    constructor(id,name,email,amount,address){
        super(name,email,address)
        this.acc_id=id
        this.acc_bal=amount
    }
}
