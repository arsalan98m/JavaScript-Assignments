// ------------ Chapter 38 to 42 (Functions, Switch Statements, While and Do-While loop) --------------------- //

// Task # 1 (custom function power)

/*
function power(a, b) {
    var pow = a ** b;
    return pow;
}

console.log(power(2, 10));
*/

// Task # 2 (leap year)

/*
function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "leap year";
            } else {
                return "not leap year";
            }
        } else {
            return "leap year";
        }
    } else {
        return "not leap year";
    }
}

console.log(leapYear(2020));

*/

// Task # 3 (calculatre area of triangle using 2 functions)

/*
function semiPerimeter(a, b, c) {
    var s = (a + b + c) / 2;
    return s;
}

function calculateArea(a, b, c) {
    var s = semiPerimeter(a, b, c);
    var area = s * (s - a) * (s - b) * (s - c);
    return Math.pow(area, 0.5);
}


console.log(calculateArea(5, 6, 7));
*/

// Task # 4 (marks)

/*
function averageMarks(s1, s2, s3) {
    var sum = s1 + s2 + s3;
    return sum / 3;
}


function percentage(s1, s2, s3) {
    var percentage = averageMarks(s1, s2, s3) / 3;
    return percentage;
}
function main(s1, s2, s3) {
    console.log("Average = " + averageMarks(s1, s2, s3));
    console.log("Percentage = " + percentage(s1, s2, s3));
}

main(100, 100, 100);

*/

// Task # 5 (custome indexOf custome function)

/*
function indexOfCustom(text, character) {

    for (var i = 0; i < text.length; i++) {
        if (text[i] === character) {
            console.log(i);
        }
    }
}

indexOfCustom("abc", "b");
*/


// Task # 6 (remove vowels)

/*
function removeVowels(str) {
    if (str.length > 25) {
        return str.replace(/[aeiou]/gi, "");
    } else {
        return "String must be 25 characters long";
    }
}

console.log(removeVowels("my name is arsalan sdasdasdasfasfasfasfas"));
*/


// Task # 7

/*
function numberOfOccurences(text) {
    var count = 0;
    var flag = false;

    for (var i = 0; i < text.length; i++) {
        switch (text[i].toLowerCase()) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                {
                    if (flag) {
                        count++;
                        flag = false;
                    } else {
                        flag = true;
                    }
                    break;
                }
            default:
                flag = false
        }
    }
    return count;
}


var text = "Pleases read this application and give me gratuity";
console.log(numberOfOccurences(text));


*/

// Task # 8

/*
function convertKmtoMeter(km) {
    return km * 1000 + "m";
}


function convertKmtoFeet(km) {
    return km * 3280.8 + " ft";
}

function convertKmtoInches(km) {
    return km * 39370 + " inch";
}

function convertKmtoCentimeters(km) {
    return km * 100000 + " cm";
}
var kilometer = 5;

console.log(kilometer + "km is equal to " + convertKmtoMeter(kilometer));
console.log(kilometer + "km is equal to " + convertKmtoFeet(kilometer));
console.log(kilometer + "km is equal to " + convertKmtoInches(kilometer));
console.log(kilometer + "km is equal to " + convertKmtoCentimeters(kilometer));
*/

// Task # 9 (calculate overtime pay)

/*
function overTimePayOfEmployees(workTime) {
    var overTimePay = 0;
    var overTime = 0;

    if (workTime > 40) {
        overTime = workTime - 40;
        overTimePay = overTime * 12.00;
        overTimePay = overTimePay.toFixed(2);


    } else {
        return "You don't worked at extra hours your overtime pay is Rs 0."
    }
    return "Your overtime pay is Rs " + overTimePay;;
}

var workTime = parseInt(prompt("Enter the time employee worked in hour"));
console.log(overTimePayOfEmployees(workTime));
*/

// Task # 10 (cashier currency note of domination)

var amount = prompt("Enter amount withdraw");

var hundreds = Math.floor(amount / 100);
var fifties = Math.floor((amount % 100) / 50);
var tens = Math.floor(((amount % 100) % 50) / 10);
var stillAmount = ((amount % 100) % 50) % 10;

console.log("You will have " + hundreds + " hundred notes " + fifties + " fifty notes " + tens + " ten notes and " + stillAmount + " rupees.")
