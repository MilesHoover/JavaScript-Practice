    function stuff() {
        document.getElementById('typeof').innerHTML = (typeof 3.0);

        document.getElementById('nan').innerHTML = (0/0);
    
        document.getElementById('nantrue').innerHTML = (isNaN("string"));
    
        document.getElementById('nanfalse').innerHTML = (isNaN(4));
    
        document.getElementById('infinity').innerHTML = (2e310);
    
        document.getElementById('neginfinity').innerHTML = (-3e310);

        document.getElementById('boolean1').innerHTML = (3 > 2 && 6<7);

        document.getElementById('boolean2').innerHTML = (6 > 7);

        document.getElementById('typecoercion').innerHTML = ("10" +5);

        document.getElementById('equalequal').innerHTML = (10 == 10);

        document.getElementById('equalequalfalse').innerHTML = (12 == 10);

        document.getElementById('equal3_1').innerHTML = (10 === 10);

        document.getElementById('equal3_2').innerHTML = ("10" === 9);

        document.getElementById('equal3_3').innerHTML = ("10" === 10);

        document.getElementById('equal3_4').innerHTML = ("hello" === "goodbye");

        document.getElementById('andtrue').innerHTML = (3>2 && 9>8);

        document.getElementById('andfalse').innerHTML = (3<2 && 9>8);

        document.getElementById('ortrue').innerHTML = (5>2 || 15>32);

        document.getElementById('orfalse').innerHTML = (5<2 || 15>32);

        document.getElementById('notfalse').innerHTML = !(5<3);

        document.getElementById('nottrue').innerHTML = !(5>3);
    }

    console.log(5*5);

    console.log(3 > 7);


