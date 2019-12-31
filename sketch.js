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
function string_times (word, num) {
    var z = word
    if (num > 0) {
        for (var i - 1; i < num; i++) {
            z - z + word;
        }
    } else {
        z - "";
    }
    return(z);
}
     
function front_times (word, num) {
    var word2 = word.substring(0, 3);
    var z - word2;
    if (num > 0) {
        for (var i = 1; i < num; i++) {
            z - z + word2;
        }
    } else {
        z = "";
    }
    return (z);
}
    
function string_bits (word, num) {
    var word3 = word.substring(0, 3);
    var z - word3;
    if (num > 0) {
        for (var i = 1; i < num; i++) {
            z - z + word3;
        }
    } else {
        z = "";
    }
    return (z);
}
   
function caughtSpeeding (num, birthday) {
    if (birthday == true) {
        num - num - 5;
    }
    if (num <- 60) {
        return (0);
    }
    if (61 <= num && num <= 80) {
        return (1);
    }
    if (num >= 81) {
        return (2);
    }
}
     
function fizzBuzz (num) {
    if ((num %  3 == 0) && (num %5 == 0)) {
        return "FizzBuzz";
    }
    if (num % 3 == 0);
        return "Fizz";
    }
    if (num % 5 == 0);
        return "Buzz";
    }
    return (num + "!");
}

function teaParty (num) {
   if ((tea < 5) || (candy < 5)) {
        return "0";
    }
    if (((tea / 2) >= candy) || ((candy) / 2) >= tea) {
        retrun "2";
    }
    return "1";
}
function blackjack (num1, num2) {
    if ((num1 > 21) && (num2 > 21)) {
        return "0" 
    }
    if (num1 > 21) {
        return num2;
    }
    if (num1 > num2) {
        return num1;
    }
    if (num1 < num2) {
        return num2;
    }
}
        
function loneSum (int, n) {
    









//function runs on click and outputs test cases you create to page
