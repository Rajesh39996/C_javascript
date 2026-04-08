let prod_prices=[98,198,298,398]
let new_price=prod_prices.map((price)=>{
    return price+1
})
console.log(new_price)

let new1_price=prod_prices.forEach(price=>price+1)
console.log(new1_price)