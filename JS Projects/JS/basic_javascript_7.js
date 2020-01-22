var x = 5;

function localvariable() {
    var y = 80;
    document.write(x + y);
}

localvariable();

function variableerror() {
    document.write(x + y);
}

variableerror();

function conditional() {
    if (new Date().getHours() < 12) {
        document.getElementById("conditionresult").innerHTML = "Good Morning!"
    }
    else {
        document.getElementById("conditionresult").innerHTML = "Good Afternoon!"
    }
}

function conditional2() {
    if (x>2) {
        document.getElementById("conditionresult2").innerHTML = x + "is greater than 2"
    }
    else {
        document.getElementById("conditionresult2").innerHTML = x + " is less than 2"
    }
}

function conditional3() {
    var x = 40000;
    var y = 98;
    if (x > y) {
        document.getElementById("conditionresult3").innerHTML = x + " is greaer than " + y;
    }
    else {
        document.getElementById("conditionresult3").innerHTML = x + " is less than " + y;
    }   
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "it is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}