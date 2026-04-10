class Account{
    constructor (name,email,address){
        this.acc_name=name
        this.acc_email=email
        this.acc_addr=address
    }
    get_bal(){
    }
}
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
class CA extends Account{
    constructor(id,name,email,amount,address){
        super(name,email,address)
        this.acc_id=id
        this.acc_bal=amount
    }
}

let sa1= new SA(101,"rajesh","rajesh39996@gmail.com",100000,"bengaluru")
let ca1= new CA(104,"swaroop","swaroop123@gmail.com",200000,"KA")
console.log(sa1)
console.log(ca1)