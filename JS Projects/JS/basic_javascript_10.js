function loop() {
    var x = 1;
    var digit = "";
    while (x <= 10) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = digit;
}

function length() {
    var x = "Hello my name is Miles Hoover and I am a novice programmer.";
    var y = x.length;
    document.getElementById("output").innerHTML = y;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}

function array_Function() {
    var cat_pictures = [];
    cat_pictures[0] = "sleeping";
    cat_pictures[1] = "purring";
    cat_pictures[2] = "meowing";
    document.getElementById("Array").innerHTML = cat_pictures[1];
}

const shoe = {brand:"nike", color:"white", size:"10"}

function constant_function() {
    shoe.brand = "adidas";
    shoe.style = "running";
    document.getElementById("Constant").innerHTML = "I am wearing " + shoe.color + " " + shoe.brand + " shoes that are size " + shoe.size + ", they are made for " + shoe.style + ".";
}

function let_function() {
    var x = 100;
    document.write(x);
    {
        let x = 10;
        document.write("<br>" + x);  
    }
    document.write("<br>" + x);  
}

function loop(){
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text += "The number is " + i + "<br>";
    }
document.getElementById("continue").innerHTML = text;  
}

function loop2(){
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
        if (i === 3) { break; }
        text += "The number is " + i + "<br>";
    }
document.getElementById("continue2").innerHTML = text;  
}