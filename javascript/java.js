var allproducts =document.querySelectorAll("#div1")
var divmain = document.querySelector("#divmain")
var div1 = document.querySelectorAll("#div1")
var totalprice = 0

allproducts.forEach(function(item){
item.onclick = function(){
totalprice += +(item.getAttribute("price"))
divmain.innerHTML =+ totalprice
if(divmain.innerHTML != ""){
    btn1.style.display="block"
}

    }
})
btn1.onclick=function(){
    divmain.innerHTML=""
    totalprice = 0
}