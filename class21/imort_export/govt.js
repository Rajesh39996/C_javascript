let tax=18;

function get_tax(){
    return tax
}
class Tax{
    constructor(){
        console.log("tax class const")
    }
}
module.exports=tax;
module.exports={tax,Tax}