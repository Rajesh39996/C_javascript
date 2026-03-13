function changecolor1(){
    // alert("tc123")
    let btn1=document.getElementById("btn1")
    console.log(btn1)
    btn1.style.backgroundColor="blue"
    btn1.innerHTML="DT"
}


function changecolor2(){
    //alert("hello 123")
    let btn2=document.getElementsByClassName("btnstyle1")[0];
    console.log(btn2);
    btn2.style.backgroundColor="red"
    btn2.innerHTML="RK"
}

function changecolor3(){
    //alert("123")
    let btn3= document.getElementsByTagName("button")[2]
    btn3.style.backgroundColor="yellow"
    btn3.innerHTML="RRK"

}

function changecolor4(){
    // alert("123")
    let btn4 = document.querySelector(".btnstyle3");
    console.log(btn4)
    btn4.style.backgroundColor = "green"
    btn4.innerHTML="Hello"
}

// function changecolor4(){
//     let btn4 = document.querySelector(".btnstyle3");
//     console.log(btn4)
//     btn4.style.backgroundColor = "green";
//     btn4.innerHTML = "Hello";
// }