let employees=[
    {eid:101,ename:"Rahul",esal:45000.45},
    {eid:102,ename:"Sonia",esal:55000.45}
]
let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag=true;
            flag?resolve("Data Inserted"):reject("Failed")
            employees.push(emp);
        },4000)
    })
}
let getEmployees=()=>{
     setTimeout(()=>{
        let rows="";
        employees.forEach((emp)=>{
            rows=rows+`<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.esal}</td>
                        </tr>`
        })
        document.getElementById('tdata').innerHTML=rows;
     },2000)
}

let excute =async()=>{
    await createEmployee({eid:103,ename:"rajesh",esal:35000})
    getEmployees();
}

// let employees = [
//     { eid: 101, ename: "Rahul", esal: 45000.45 },
//     { eid: 102, ename: "Sonia", esal: 55000.45 }
// ];

// let createEmployee = (emp) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let flag = true;

//             if (flag) {
//                 employees.push(emp);
//                 resolve("Data Inserted");
//             } else {
//                 reject("Failed");
//             }
//         }, 4000);
//     });
// };

// let getEmployees = () => {
//     let rows = "";
//     employees.forEach((emp) => {
//         rows += `<tr>
//                     <td>${emp.eid}</td>
//                     <td>${emp.ename}</td>
//                     <td>${emp.esal}</td>
//                  </tr>`;
//     });
//     document.getElementById('tdata').innerHTML = rows;
// };

// let excute = async () => {
//     await createEmployee({ eid: 103, ename: "Rajesh", esal: 35000 });
//     getEmployees();
// };

// // ✅ IMPORTANT
// window.onload = () => {
//     getEmployees();  // initial load
//     excute();        // async update
// };

// // ✅ MUST CALL FUNCTION
// excute();