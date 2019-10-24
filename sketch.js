//write first method
function sleep_in(weekday,vacation) {
    return weekday;
}

//write second method
function monkey_trouble(param1, param2) {
    return param1;
}

//add 2-10 below here...

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    //test third method, etc
}

document.getElementById("output").innerHTML += sleep_in(true, false);
document.getElementById("output").innerHTML += monkey_trouble(true, false);
//test third method, etc
}
