let numbers=[1,2,3,4,5]
let even=[]

for (num of numbers){
    if (num%2===0)
        even.push(num)
}
console.log(even)

let even2=numbers.filter(num=>num%2===0)
console.log(even2)

let even1=numbers.map(num=>num%2===0)
console.log(even1)