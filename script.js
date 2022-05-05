
var s= document.getElementById("ll");
 var r = document.getElementById("rate")
    r.addEventListener("change",ff);
    function ff(){
         var r = document.getElementById("rate").value;
         
    s.innerText=r +"%";
}
function compute()
{
 var   p = document.getElementById("principal").value;
    var y =document.getElementById("years").value;
    var r = document.getElementById("rate").value;
    
    var result = p*y*r/100;
    var out= document.getElementById("result");
    out.innerHTML="if you depost"+" "+p+"<br>" +"at an interest rate of"+" "+ 
    r+"<br>"+"you will recieve the amonnt"+" "+result+"<br>"+ " in the year" +" " +y;
    console.log("i am running",result);
    
}
        
