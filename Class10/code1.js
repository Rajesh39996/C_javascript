let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000},
    {eid:103,ename:"Priyanka",esal:65000},
    {eid:104,ename:"Modi",esal:75000},
    {eid:105,ename:"Amith",esal:85000},
    {eid:106,ename:"DK shiva Kumar",esal:95000},
]

//create Javascript -
//to display employee data in html table.
function displayEmpData(){

    let tbody = document.getElementsByTagName('tbody')[0];

    employees.forEach(function(emp){

        let row = `<tr>
                    <td>${emp.eid}</td>
                    <td>${emp.ename}</td>
                    <td>${emp.esal}</td>
                   </tr>`;

        tbody.innerHTML += row;

    });

}