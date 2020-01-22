var a = "this is a string";

alert(a);

document.write("\"You're a cool person\"");

var b = "concatenated" + " string";

document.write(b);

var family = mom = "katherine", dad = "mike", sister = "lily";
var mom = mom.fontcolor("blue"); 
var dad = dad.fontcolor("green");
var sister = sister.fontcolor("red");
document.write(mom);
document.write(dad);
document.write(sister);

document.write(32/8);

function displayTime() {
    document.getElementById('demo').innerHTML=Date();
}