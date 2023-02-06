document.getElementById("form").addEventListener("submit" ,mydata) ;
let text= document.getElementById("text") ;
let datalocal= JSON.parse(localStorage.getItem("data"))||[] ;
function mydata(e){
e.preventDefault() ;
let data= {
    title:text.value 
}
datalocal.push(data) ;


localStorage.setItem("data" ,JSON.stringify(datalocal)) ;

}
document.getElementById("go").addEventListener("click" ,my) 
function my(){
    window.location.href= "go.html"
}