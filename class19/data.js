let employes=[
    {eid:101, ename:"suresh", salary:45000, dept:"IT"},
    {eid:102, ename:"ramesh", salary:55000, dept:"HR"},
    {eid:103, ename:"mahesh", salary:65000, dept:"IT"},]
function createEmploye(emp){
    setTimeout(()=>{
        employes.push(emp)
    },4000)
}
function getEmployes(){
    setTimeout(()=>{
        let rows="";
        for(let emp of employes){
            rows=rows+`<tr>
            <td>${emp.eid}</td>
            <td>${emp.ename}</td>
            <td>${emp.salary}</td>
            <td>${emp.dept}</td>
        </tr>`
        }
        document.getElementById("tbody").innerHTML=rows;
    },4000)
}
createEmploye({eid:104, ename:"rajesh", salary:75000, dept:"HR"})
getEmployes()