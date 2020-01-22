function validateForm() {
    var x = document.forms["sampleform"]["fname"].value;
    if (x === "") {
        alert("First name must be filled out");
        return false;
    }
    var y = document.forms["sampleform"]["lname"].value;
    if (y === "") {
        alert("Last name must be filled out");
        return false;
    }
    var z = document.forms["sampleform"]["email"].value;
    if (z === "") {
        alert("Email must be filled out");
        return false;
    }
    var q = document.forms["sampleform"]["message"].value;
    if (q === "") {
        alert("Message must be filled out");
        return false;
    }
}