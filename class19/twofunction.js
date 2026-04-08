let gotoMovie=(success, failure)=>{
    let acc_bal=500;
    if(acc_bal>300){
        success("Movie Ticket Booked")
    }    else{
        failure("Insufficient Balance")
    }
}
gotoMovie((resp=>{console.log(resp)}), (err=>{console.error(err)}) )