function changeColor(){
    //alert("Test Case 123")
    let input_Tag_Ref=document.getElementById('ip1')
    console.log(input_Tag_Ref)
    input_Tag_Ref.style.backgroundColor="yellow"
    console.log(input_Tag_Ref)
 }
function changeCase(){
    //alert("Test Case 123")
    let ename=document.getElementById('ip2').value;
    console.log(ename)
    document.getElementById('ip2').value=ename.toUpperCase();
    //document.getElementById('ip2').value="Rajni"
}

function changeColor(element){
    element.style.backgroundColor = "yellow";
}

function toUpperText(element){
    element.value = element.value.toUpperCase();
}