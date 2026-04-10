class Account{
    acc_id;
    acc_Name;
    acc_Bal;
    constructor(id,Name,amount){
        this.acc_id=id
        this.acc_Name=Name
        this.acc_Bal=amount
    }
}
let a1=new Account(101,"Rajesh",30000)
let a2=new Account(102,"Swaroop",100000)
console.log(a1)
console.log(a2)