function myDictionary() {
    var car = {
        make:"hyundai",
        model:"sonata SE",
        year:2011,
        milleage:70000,
        color:"light blue",
        engine: "2.4 Liter 4-Cylinder"
    };
    document.getElementById('make').innerHTML = car.make;

    delete car.engine;

    document.getElementById('engine').innerHTML = car.engine;
}