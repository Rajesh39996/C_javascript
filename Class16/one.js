let prices=[98,101,198,289]
let new_price=[]
let i=0
while(i<=prices.length-1){
    new_price.push(prices[i]+1)
    i++
}
console.log(new_price)

let new1_price=[]
for(price of prices){
    new1_price.push(price+1)
}
console.log(new1_price)