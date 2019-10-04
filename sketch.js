 function go() {

//   alert("GO!!")
var output;
var func = document.getElementById("selectionType").value;
var input = document.getElementById("textBox").value;
  if(func == 0) {
      output = triangle(+input);
    }
  if(func == 1) {
      output = fibonacci(+input);
    }
  if(func == 2) {
      output = sumDigits(+input);
    }
  if(func == 3) {
      output = countHi(+input);
    }
  if(func == 4) {
      output = stringClean(+input);
    }
  if(func == 5) {
      output = bunnyEars(+input);
    }
  if(func == 6) {
      output = strCopies(+input);
    }
  if(func == 7) {
      output = noX(+input);
    }
  if(func == 8) {
      output = countAbc(+input);
    }

  document.getElementById("output").innerHTML = output;
 }

function triangle(rows) {
  if (rows == 0) return 0;
    return rows + triangle(rows - 1);
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 2) + fibonacci(n - 1);
}

function sumDigits(n) {
  if (n == 0) return 0;
  return n % 10 + sumDigits(n / 10);
}

function countHi(str) {
  if (str.length() < 2) return 0;
  if (str.substring(0,2).equals("hi")) return 1 +
countHi(str.substring(1));
  else return countHi(str.substring(1));
}

function stringClean(str) {
  if (str.length() < 2) return str;
  if (str.charAt(0) == str.charAt(1))
    return stringClean(str.substring(1));
  else {
    return str.chartAt(0) + stringClean(str.substring(1));
    }
}

function bunnyEars (bunnies) {
  if (bunnies == 0) return 0;
  return 2 + bunnyEars(bunnies-1);
}

function strCopies(str, sub, n) {
  if (func(str, sub) == n) return true;
  else return false;
}
function noX(str) {
  if (str.equals("")) return str;
  if (str.charAt(0) == 'x')
    return noX(str.substring(1));
  else
    return str.charAt(0) + noX(str.substring(1));
}

function countAbc(str) {
  if (str.length() < 3) return 0;
  if (str.substring(0,3).equals("abc") ||
str.substring(0,3).equals("aba"))
    return 1 + countAbc(str.substring(1));
  else
    return countAbc(str.substring(1));
}
