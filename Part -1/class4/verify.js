let input=require('prompt-sync')()

let num=parseInt(input("enter a Number : "))

if (num>=100 && num<=999){
    console.log("it is a three digit Number")
}else{
    console.log("Given number is not a three digit number")
}