function sleep_in(weekday, vacation) {

    if (weekday == true && vacation == false) {
        return false;
    }
    if (weekday == true && vacation == true) {
        return true;
    }
    if (weekday == false && vacation == false) {
        return true;
    }
    if (weekday == false && vacation == true) {
        return true;
    }

}

function monkey_trouble(a_smile, b_smile) {

    if (a_smile == true && b_smile == true) {
        return true;
    }
    if (a_smile == true && b_smile == false) {
        return false;
    }
    if (a_smile == false && b_smile == false) {
        return true;
    }
    if (a_smile == false &&  b_smile == true) {
        return false;
    }
function string_times (str, n) {
    return str;
}
function front_times (str, n) {
    return str;
}
function string_bits (str, n) {
    return str;
}
function caughtSpeeding (str, int) {
    return str;
}
function fizzBuzz (str, n) {
    return str;
}
function teaParty (int, n) {
    return int;
}
function blackjack (int, n) {
    return int;
}
function loneSum (int, n) {
    return int;
}
//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times('Hi, 1', 'Hi, 2', 'Hi, 3');
    document.getElementById("output").innerHTML += front_times('Chocolate, 2', 'Chocolate, 3', 'Abc, 3');
    document.getElementById("output").innerHTML += string_bits('Hello', 'Hi', 'Heeololeo');
    document.getElementById("output").innerHTML += caughtspeeding(true, false);
    document.getElementById("output").innerHTML += fizzBuzz('fizzString2(1)', 'fizzString2(2)', 'fizzString2(3)');
    document.getElementById("output").innerHTML += teaParty('(6,8)', '(3,8)', '(20,6)');
    document.getElementById("output").innerHTML += blackjack('(19,21)', '(21, 19)', '(19, 22)');
    document.getElementById("output").innerHTML += loneSum('(1,2,3)', '(3,2,3)', '(3,3,3)');
    //test third method, etc

document.getElementById("output").innerHTML += sleep_in(true, false);
document.getElementById("output").innerHTML += monkey_trouble(true, false);
document.getElementById("output").innerHTML += string_times('Hi, 1', 'Hi, 2', 'Hi, 3');
document.getElementById("output").innerHTMl += front_times('Chocolate, 2' , 'Chocolate, 3', 'Abc, 3');
document.getElementById("output").innerHTMl += string_bits('Hello', 'Hi', 'Heeololeo');
document.getElementById("output").innerHTML += caughtSpeeding(true, false);
document.getElementById("output").innerHTML += fizzBuzz('fizzString2(1)', 'fizzString2(2)', 'fizzString2(3)');
document.getElementById("output").innrtHTML += teaParty('(6,8)', '(3,8)', '(20,6)');
document.getElementById("output").innerHTML += blackjack('(19,21)', '(21, 19)', '(19, 22)');
document.getElementById("output").innerHTML += loneSum('(1,2,3)', '(3,2,3)', '(3,3,3)');

//test third method, etc
}
