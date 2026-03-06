const courses = ["java","python","javascript","c++"];

const len=courses.length;
for(let i=0;i<len;i++){
    console.log(courses[i]);
}
console.log("**********");
let i=0;
while(i<len){
    console.log(courses[i]);
    i++;
}
console.log("**********");
let j=0;
do{
    console.log("Hello World"+" "+courses[j]);
    j++;
}while(j<len);