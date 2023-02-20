
function netprofit() {
    var quantity1 = (document.getElementById("quan"));  // percent error
    var EV = document.getElementById("name").value;    //Estimated value
    var AV = document.forms["myform"]["cost"].value;  //Actual value

    if (EV == 0) {
        document.getElementById("modal-text").style.display = "block";
        timeout = setTimeout(function () {
            document.getElementById("modal-text").style.display = "none";

        }, 3000);
        return;
    }
    if (AV == 0) {
        document.getElementById("modal-text1").style.display = "block";
        timeout = setTimeout(function () {
            document.getElementById("modal-text1").style.display = "none";

        }, 3000);
        return;
    }

    let  l1 = (((EV - AV) / AV) * 100).toFixed(2);

    quantity1.value = l1;

    
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