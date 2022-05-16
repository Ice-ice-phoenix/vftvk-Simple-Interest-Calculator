
var s= document.getElementById("ll");
 var r = document.getElementById("rate")
    r.addEventListener("change",ff);
var f= document.getElementById("principal");

    function ff(){
         var r = document.getElementById("rate").value;
         
    s.innerText=r +"%";
}
function compute()
{
 var   p = document.getElementById("principal").value;
    var y =document.getElementById("years").value;
    var r = document.getElementById("rate").value;
    if (p == 0){
 alert("enter a positive number");
     f.focus();
     
 
}
    var result = p*y*r/100;
    var out= document.getElementById("result");
    out.innerHTML="if you deposit"+" " +"<span class='var'>" +p+ "</span>"+ "<br>" +"at an interest rate of"+" "+ 
    "<span class='var'>"+ r+ "</span>"+  "<br>"+"you will recieve the amonnt"+" " 
     +"<span class='var'>"+result+"</span>"+"<br>"+ " in the year" +" "+"<span class='var'>" +y+"</span>";
    console.log("i am running",result);
    
}
        
