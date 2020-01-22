function addFunction() {
    var add = 2+2;
    document.getElementById('mathadd').innerHTML = "2 + 2 = " + add;
}

function subFunction() {
    var sub = 5-7;
    document.getElementById('mathsub').innerHTML = "5 - 7 = " + sub;
}

function multFunction() {
    var mult = 10*10;
    document.getElementById('mathmult').innerHTML = "10 * 10 = " + mult;
}

function divFunction() {
    var div = 12/4;
    document.getElementById('mathdiv').innerHTML = "12 / 4 = " + div;
}

function mathFunction() {
    var math = 8 / 2 + 9 * 72 - 11;
    document.getElementById('mathsimple').innerHTML = "8 / 2 + 9 * 72 - 11 = " + math;
}

function remainderFunction() {
    var remain = 24 % 9;
    document.getElementById('mathremain').innerHTML = "24 % 9 = " + remain;
}

function negunaryFunction() {
    var unary = 9;
    document.getElementById('mathnegunary').innerHTML = "negative unary of 9 is " + -unary;
}

function increFunction() {
    var incre = 15;
    document.getElementById('mathincre').innerHTML = "15 incremented by 1 is " + ++incre;
}

function decreFunction() {
    var decre = 20;
    document.getElementById('mathdecre').innerHTML = "20 decremented by 1 is " + --decre;
}

function randomFunction() {
    document.getElementById('mathrandom').innerHTML = "You're random number between 1 and 1000 is "  + Math.floor(Math.random() * 1000);
}

function sqrtFunction() {
    document.getElementById('mathsqrt').innerHTML = "The square root of 64 is "  + Math.sqrt(64);
}