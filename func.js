
 var p = document.getElementById("cal");
 p.addEventListener('touchstart', () => {});
 p.addEventListener('touchend', () => {});
 p.addEventListener('touchcancel', () => {});
 p.addEventListener('touchmove', () => {});
 

 function merchantfee(){
var quantity = document.getElementById("quan").value;
    var merchant = quantity * 0.029 + 0.3;
document.getElementById("prod").value = merchant.toFixed(2);

 }
 function calculate() {
 
 
    var x = document.forms["myform"]["name"].value;
    var y = document.forms["myform"]["quan"].value;
    var z = document.forms["myform"]["cost"].value;

    var x1 = document.forms["myform"]["prod"].value;
    var y1 = document.forms["myform"]["ship"].value;
    var x2 = document.forms["myform"]["pckg"].value;
    var y2 = document.forms["myform"]["tax"].value;
    var x3 = document.forms["myform"]["duty"].value;
    
    var app = document.getElementById("dynamic");

    if (x == 0 || y == 0) {
        document.getElementById("modal-text").style.display = "block";
        timeout = setTimeout(function(){
            document.getElementById("modal-text").style.display = "none";
           
        }, 3000);
        return;
    }

    if(x1 == 0 && y1 == 0 && x2 == 0 && y2 == 0 && x3 == 0){

        document.getElementById("modal-text2").style.display = "block";
        timeout = setTimeout(function(){

            document.getElementById("modal-text2").style.display = "none";
           
        }, 3000);
        return;
    }

 
     var prod1 = (document.getElementById("prod").value);
     var ship1 = (document.getElementById("ship").value);
     var pckg1 = (document.getElementById("pckg").value);
     var tax1 = (document.getElementById("tax").value);
     var duty1 = (document.getElementById("duty").value);
     var quantity1 = (document.getElementById("quan").value);
     var name = document.getElementById("name").value;
     var app = document.getElementById("dynamic");
    var cost = document.forms["myform"]["cost"].value;

     if ($("#dynamic").find("div").length !== 0) {
 
         while (app.firstChild) {
             app.removeChild(app.lastChild);
 
         }
     }
 
     let total1 = Number(prod1) + Number(ship1) + Number(pckg1) + Number(tax1) + Number(duty1);
     let total = (total1 / parseInt(quantity1)).toFixed(2);
 
 
     var app = document.getElementById("dynamic");
 
     
     let p1 = document.createElement("div");
     p1.setAttribute("class" , "input-group");
     p1.setAttribute("id", "added")
     
     let s1 = document.createElement("br");
     let q1 = document.createElement("h3");
     q1.setAttribute("id", "result");
     q1.textContent = "Cost per Item: " + " $"+total;
 

     p1.appendChild(q1);
     app.appendChild(s1);
     app.appendChild(p1);
     
     console.log(total);
 
 }
 function clean(p){
     p.value = "";
 }
 
 function hover(n) {
    if (n == 0) {
        document.getElementById("display0").style.display = "block";
    }
     if (n == 1) {
         document.getElementById("display1").style.display = "block";
     }
     if (n == 2) {
         document.getElementById("display2").style.display = "block";
     }
     if (n == 3) {
         document.getElementById("display3").style.display = "block";
     }
     if (n == 4) {
         document.getElementById("display4").style.display = "block";
     }
     if (n == 5) {
         document.getElementById("display5").style.display = "block";
     }
     if (n == 6) {
         document.getElementById("display6").style.display = "block";
     }
     if (n == 7) {
         document.getElementById("display7").style.display = "block";
     }
 
 
 }
 function dis(n) {
    if (n == 0) {
        document.getElementById("display0").style.display = "none";
    }
     if (n == 1) {
         document.getElementById("display1").style.display = "none";
     }
     if (n == 2) {
         document.getElementById("display2").style.display = "none";
     }
     if (n == 3) {
         document.getElementById("display3").style.display = "none";
     }
     if (n == 4) {
         document.getElementById("display4").style.display = "none";
     }
     if (n == 5) {
         document.getElementById("display5").style.display = "none";
     }
     if (n == 6) {
         document.getElementById("display6").style.display = "none";
     }
     if (n == 7) {
         document.getElementById("display7").style.display = "none";
     }
 
 }