function concat() {
    var one = "Hello,";
    var two = " World!";
    var whole_sentence = one.concat(two);
    document.getElementById("sentence").innerHTML = whole_sentence;
}

function slice() {
    var sentence = "Hello, my name is Miles Hoover and I am a novice programmer.";
    var slice = sentence.slice(18,23);
    document.getElementById("sliced").innerHTML = slice;
}

function uppercase() {
    var sentence = "Hello, my name is Miles Hoover and I am a novice programmer.";
    var upper = sentence.toUpperCase();
    document.getElementById("upper").innerHTML = upper;
}

function searchfor() {
    var sentence = "Hello, my name is Miles Hoover and I am a novice programmer.";
    var search = sentence.search("Miles");
    document.getElementById("search").innerHTML = search;
}

function string() {
    var number = 1999;
    document.getElementById("tostring").innerHTML = number.toString();
}

function precision() {
    var number = 34234234234234.5346245674323
    document.getElementById("precise").innerHTML = number.toPrecision(13);
}

function fixed() {
    var number = 3.14523234;
    document.getElementById("fixed").innerHTML = number.toFixed(2);
}

function value() {
    var sentence = "My name is Miles Hoover";
    var res = sentence.valueOf();
    document.getElementById("value").innerHTML = res;
}