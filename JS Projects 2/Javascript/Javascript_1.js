function animal_function() {
    var animal_output;
    var animals = document.getElementById("animal_input").value;
    var animal_string = " is a great animal!";
    switch(animals) {
        case "Cat":
            animal_output = "A Cat" + animal_string;
        break;
        case "Dog":
            animal_output = "A Dog" + animal_string;
        break;
        case "Bird":
            animal_output = "A Bird" + animal_string;
        break;
        default:
            animal_output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML = animal_output;
}

function classname() {
    var n = document.getElementsByClassName("click");
    n[0].innerHTML = "This is a new sentence";
}


function canvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(0,0);
    ctx.lineTo(200,100);
    ctx.stroke();
}

function canvas1() {
    var c = document.getElementById("myCanvas1");
    var ctx = c.getContext("2d");

    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
}