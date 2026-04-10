//reusing the exisiting class functionally and adding/extending new features
class parent {
    m1(){
        console.log("pc-m1 method")
    }
    m2(){
        console.log("pc-m2 methode")
    }
}
class child extends parent{
    m3(){
        console.log("cc-m3 chaild method")
    }
}
let c1=new child();
c1.m1()
c1.m2()
c1.m3()