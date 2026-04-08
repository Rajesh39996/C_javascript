class Account{
    acc_bal=0;

    deposit_amount(amount){
        this.acc_bal=this.acc_bal+amount
    }
}
let a1=new Account();
console.log(a1)
a1.deposit_amount(500)
console.log(a1)
a1.deposit_amount(1000)

let a2=new Account();
console.log(a2)
a2.deposit_amount(2000)
console.log(a2)
a2.deposit_amount(6000)
console.log(a2)