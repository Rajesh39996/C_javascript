function login(name, password){
    if (name==="rahul"&& password=="123"){
        return true;
    }
    return false;
}

let st1=login("rahul","123")
let st2=login("rahul","145")
console.log(st1)
console.log(st2)
