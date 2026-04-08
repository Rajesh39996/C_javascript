let getdata=async(name)=>{
    let user_resp=await fetch("https://dummyjson.com/users")
    let user_data=await user_resp.json();
    let users= user_data.users;
    let user =users.find((user)=> user.firstName===name);
    console.log(user);
}
console.log(getdata("Lily"));