// ------------ Chapter 21 to 25 (String Methods) --------------------- //

// Task # 1
/*
var firstName = prompt("Enter first name");
var lastName = prompt("Enter last name");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName);
*/

// Task # 2
/*
var favoriteMobilePhone = prompt("Enter your favorite mobile phone model");
document.write("My favorite phone is: " + favoriteMobilePhone + "<br>");
document.write("Lenth of string: " + favoriteMobilePhone.length);
*/

// Task # 3

/*
string = "Pakistani";
index_of_n = string.indexOf("n");
document.write("String: " + string + "<br>");
document.write("Index of 'n': " + index_of_n);
*/

// Task # 4

/*
string = "Hello world";
last_index_of_l = string.lastIndexOf("l");

document.write("String: " + string + "<br>");
document.write("Last index of 'l': " + last_index_of_l);
*/

// Task # 5

/*
string = "Pakistani";
find_character = string[3];

document.write("String: " + string + "<br>");
document.write("Character at index 3: " + find_character);
*/

// Task # 6

/*
var firstName = prompt("Enter first name");
var lastName = prompt("Enter last name");
var fullName = firstName.concat(" ", lastName);
fullName = "Hello, ".concat(fullName);
alert(fullName);
*/

// Task # 7

/*
var city = "Hyderabad";
var replaceCity = city.replace("Hyder", "Islam");

document.write("City: " + city + "<br>");
document.write("After replacement: " + replaceCity);
*/

// Task # 8

/*
var message =
  "Ali and Sami are best friends. They play cricket and football together.";
var updatedMessage = message.replace(/and/g, "&");

document.write(updatedMessage);
*/

// Task # 9

/*
var string = "472";
var number = parseInt(string);

document.write("Value: " + string + "<br>");
document.write("Type: " + typeof string + "<br>");

document.write("Value: " + number + "<br>");
document.write("Type: " + typeof number + "<br>");
*/

// Task # 10

/*
var userInput = prompt("Enter characters");
var convertUserInput = userInput.toUpperCase();

document.write("User input: " + userInput + "<br>");
document.write("Upper case: " + convertUserInput);
*/

// Task # 11

/*
var userInput = prompt("Enter characters");
var firstChar = userInput[0].toUpperCase();
var otherChar = userInput.slice(1);
var titleCase = firstChar + otherChar;

document.write("User input: " + userInput + "<br>");
document.write("Title case: " + titleCase);
*/

// Task # 12

/*
var num = 35.36;
var numToString = num.toString();
var removingDot = numToString.replace(".", "");

document.write("Number: " + num + "<br>");
document.write("Result: " + removingDot);
*/

// Task # 13

/*
var userName = prompt("Enter your username?");

var character;

for (var i = 0; i < userName.length; i++) {
  character = userName.charCodeAt([i]);
  if (
    character === 33 ||
    character === 44 ||
    character === 46 ||
    character === 64
  ) {
    alert("Please enter a valid username");
  }
}
*/

// Task # 14

/*
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt(
  "Welcome to ABC Bakery. What do want to order sir/ma'am"
);
var arrFound = false;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === userInput.toLowerCase()) {
    document.write(
      "cookie is <b>available</b> at index " + i + " in our bakery."
    );
    arrFound = true;
    break;
  }
}

if (!arrFound) {
  document.write(
    "we are sorry." + userInput + " is <b>not available</b> in our bakery"
  );
}
*/

// Task # 15

/*
var password = prompt("Enter password");
var passwordLengthinNumbers = password.length;

var passwordLength = false;
var passwordNumbers = false;
var characters;

alert("password length: " + passwordLengthinNumbers);

// checking for numbers
for (var i = 0; i < password.length; i++) {
  characters = password.charCodeAt([i]);

  if (characters >= 48 && characters <= 57) {
    passwordNumbers = true;
    break;
  }
}

// checking for length
if (passwordLengthinNumbers <= 6) {
  passwordNumbers = true;
}

if (passwordNumbers === true) {
  alert("Password can not begin with a number");
} else if (passwordLength === true) {
  alert("Password must at least 6 characters long.");
} else {
  alert("Password approved.");
}
*/

// Task # 16

/*
var university = "University of Karachi";
var stringArray = university.split("");

for (var i = 0; i < stringArray.length; i++) {
  document.write(stringArray[i] + "<br>");
}
*/

// Task # 17

/*
userInput = prompt("Enter characters");
userInputLength = userInput.length;

document.write("User input: " + userInput + "<br>");
document.write("Last character of input: " + userInput[userInputLength - 1]);
*/

// Task # 18

/*
string = "The quick brown fox jumps over the lazy dog.";
splitString = string.split(" ");
countingThe = 0;

for (var i = 0; i < splitString.length; i++) {
  if (splitString[i].toLowerCase() === "the") {
    countingThe += 1;
  }
}

document.write("Text: " + string + "<br>");
document.write("There are " + countingThe + " occurence(s) of word 'the'");
*/

// ---------------- Chapter 26 to 30 : Math Methods --------------------//

// Task # 1

/*
var positiveInteger = Number(prompt("Enter positive number"));

document.write("number: " + positiveInteger + "<br>");
document.write("round off value: " + Math.round(positiveInteger) + "<br>");
document.write("floor value: " + Math.floor(positiveInteger) + "<br>");
document.write("ceil value: " + Math.ceil(positiveInteger) + "<br>");
*/

// Task # 2

/*
var negativeInteger = Number(prompt("Enter negative number"));

document.write("number: " + negativeInteger + "<br>");
document.write("round off value: " + Math.round(negativeInteger) + "<br>");
document.write("floor value: " + Math.floor(negativeInteger) + "<br>");
document.write("ceil value: " + Math.ceil(negativeInteger) + "<br>");
*/

// Task # 3

/*
document.write("The absolute value of -4 is: " + Math.abs(-4));
*/

// Task # 4

/*
var number = Math.random();
var randomNumber = number * 10 + 1;
randomNumber = Math.floor(randomNumber);

document.write("random dice value: " + randomNumber);
*/

// Task # 5

/*
var number = Math.random();
var randomNumber = number * 2 + 1;
randomNumber = Math.floor(randomNumber);

if (randomNumber === 2) {
  document.write(randomNumber + "<br>");
  document.write("random coin value: Heads");
} else {
  document.write(randomNumber + "<br>");
  document.write("random coin value: Tails");
}
*/

// Task # 6

/*
var number = Math.random();
var randomNumber = number * 100 + 1;
randomNumber = Math.floor(randomNumber);

document.write("random number between 1 and 100: " + randomNumber);
*/

// Task # 7
/*
var userWeight = Number(prompt("Enter your weight in kilograms"));

document.write("The weight of user is " + userWeight + "kilograms   ");
*/

// Task # 8

/*
var number = Math.random();
var secretNumber = number * 10 + 1;
secretNumber = Math.floor(secretNumber);

userNumber = parseInt(prompt("Enter your number"));

if (userNumber === secretNumber) {
  alert("Congratulate you won");
} else {
  alert("Try again!");
}
*/

// --------------- Chapter 31 to 34 : Date Methods ------------------------------//

// Task # 1

/*
var currentDate = new Date();
document.write(currentDate);
*/

// Task # 2

/*
var currentDate = new Date();

var currentMonth = currentDate.getMonth();

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Novemeber",
  "December",
];

currentMonth = months[currentMonth];

document.write("Current month: " + currentMonth);
*/

// Task # 3

/*
var currentDate = new Date();
var currentDateInString = currentDate.toString();
document.write("Today is " + currentDateInString.slice(0, 3));
*/

// Task # 4

/*
var currentDate = new Date();
var currentDay = currentDate.getDay();

days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Sat"];

currentDay = days[currentDay];

if (currentDay === "Sat" || currentDay === "Sun") {
  alert("Its Fun day");
}
*/

// Task # 5

/*
var currentDate = new Date();
var currentDate = currentDate.getDate();

if (currentDate <= 15) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}
*/

// Task # 6

/*var currentDate = new Date();
var currentMills = currentDate.getTime();
var currentMinutes = currentMills / (1000 * 60);
document.write("Current Date: " + currentDate + "<br>");
document.write(
  "Elapsed milliseconds since January 1, 1970: " + currentMills + "<br>"
);
document.write("Elapsed minutes since January 1, 1970: " + currentMinutes);
*/

// Task # 7

/*
var currentDate = new Date();

var currentHour = currentDate.getHours();

console.log(currentHour);

if (currentHour < 12) {
  alert("Its AM");
} else {
  alert("It's PM");
}
*/

// Task # 8

/*
var laterDate = new Date("Dec 31 2020");

document.write("Later date: " + laterDate);
*/

// Task # 9

/*
var currentDate = new Date();
var currentMills = currentDate.getTime();

var lastRamadam = new Date("Apr 24, 2020");
var lastRamadanMills = lastRamadam.getTime();

var diffMills = currentMills - lastRamadanMills;

var accRamadanDate = diffMills / (1000 * 60 * 60 * 24);
accRamadanDate = Math.floor(accRamadanDate);

document.write(accRamadanDate + " days have passed since 1st Ramazan, 2020");
*/

// Task # 10

/*
var currentDate = new Date();
var currentMills = currentDate.getTime();

var referenceDate = new Date("Dec 05,2015 22:50:16");
var referenceDateMills = referenceDate.getTime();

var diffOfMills = currentMills - referenceDateMills;
var diffSeconds = diffOfMills / 1000;
diffSeconds = Math.floor(diffSeconds);

document.write("on reference date " + referenceDate);
document.write("<br>");
document.write(diffSeconds + " seconds had passed since beginning of 2015");
*/

// Task # 11

/*
var currentDate = new Date();
var currentHour = currentDate.getHours();

var hourAgo = currentHour - 1;

document.write("current date: " + currentDate);
document.write("<br>");

currentDate.setHours(hourAgo);
document.write("1 hour ago, it was " + currentDate);
*/

// Task # 12

/*
var currentDate = new Date();
var currentYear = currentDate.getFullYear();

var hundredYearsBack = currentYear - 100;

document.write("current date: " + currentDate);
document.write("<br>");

currentDate.setFullYear(hundredYearsBack);
document.write("100 years back, it was " + currentDate);
*/

// Task # 13

/*
var age = parseInt(prompt("Enter your age:"));

var currentDate = new Date();
var currentYear = currentDate.getFullYear();

var birthYear = currentYear - age;

document.write("Your age is :" + age);
document.write("<br>");
document.write("Your birth year is " + birthYear);
*/

// Task # 14

// Pending
/* 
var customerName = "ABC";
var currentMonth = "Feb";
var numberOfUnits = 410;
var chargePerUnit = 16;

var netAmount = numberOfUnits * chargePerUnit;
var latePayments = ;
// var grossAmount = netAmount + 

document.write("Customer Name: " + customerName + "<br>");
document.write("Month: " + currentMonth + "<br>");
document.write("Number of units: " + numberOfUnits + "<br>");
document.write("Charges per unit: " + chargePerUnit + "<br><br><br>");

document.write("Net Amount Payable (within Due Date): " + netAmount);
document.write("<br>");
document.write("Last payment surcharge: ");
document.write("<br>");
document.write("Gross amount payable (after due date): ");
*/

// ----------------------- Chapter 35 - 38 --------------------------------//

// Task # 1

/*
function currentDateandTime() {
  var currentDate = new Date();
  document.write(currentDate);
}

currentDateandTime();
*/

// Task # 2

/*
function greetUser(firstName, lastName) {
  var fullName = firstName + " " + lastName;
  alert("Hello, " + fullName);
}

greetUser("arsalan", "manzoor");
*/

// Task # 3

/*
function addTwoNumbers(num1, num2) {
  return alert("The sum of two number is " + (num1 + num2));
}

addTwoNumbers(12, 2);
*/

// Task # 4

/*
function calculator(num1, num2, operator) {
  if (operator === "+") {
    return document.write(
      "The sum of " + num1 + " and " + num2 + " is: " + (num1 + num2)
    );
  } else if (operator === "-") {
    return document.write(
      "The sub of " + num1 + " and " + num2 + " is: " + (num1 - num2)
    );
  } else if (operator === "*") {
    return document.write(
      "The multiplication of " + num1 + " and " + num2 + " is: " + num1 * num2
    );
  } else if (operator === "/") {
    return document.write(
      "The div of " + num1 + " and " + num2 + " is: " + num1 / num2
    );
  } else {
    return document.write("Invalid operator try again!");
  }
}

calculator(2, 3, "*");
*/

// Task # 5

/*
function square(num) {
  return alert("Square of " + num + " is : " + num * num);
}

square(3);
*/

// Task # 6

/*
function factorial(num) {
  var factorial = 1;
  for (var i = 1; i <= num; i++) {
    factorial = factorial * i;
  }

  // 1 * 1 = 1
  // 1 * 2 = 2
  // 2 * 3 = 6
  // 6 * 4 = 24
  console.log(factorial);
}

factorial(4);
*/

// Task # 7

/*
function counting(startNo, endNo) {
  for (var i = startNo; i <= endNo; i++) {
    document.write(i+" ");
  }
}

counting(2, 7);

*/

// Task # 8 (pending)

// Task # 9

/*
function calculateArea(width, height) {
  var area = width * height;
  return alert("Area = " + area);
}

var height = 20;
calculateArea(50, height);
*/

// Task # 10

/*
function checkPalindrom(word) {
  var reverseWord = "";
  for (var i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }

  if (word === reverseWord) {
    return alert("String is Palindrome");
  } else {
    return alert("String is not palindrome");
  }
}

checkPalindrom("madam");
*/

// Task # 11

/*
function convertFirstLetter(string) {
  var firstChar = string[0].toUpperCase();
  var otherChar = string.slice(1);
  var fullString = firstChar + otherChar;
  return fullString;
}

s = "the quick brown fox";

document.write("Example STRING: " + s + "<br>");

returnValue = convertFirstLetter(s);
document.write("Expected Output: " + returnValue);
*/

// Task # 12

/*
function longestWord(string, word) {
  var arrString = string.split(" ");
  largeString = arrString[0];

  for (var i = 0; i < arrString.length; i++) {
    if (arrString[i].length > largeString.length) {
      largeString = arrString[i];
    }
  }

  return largeString;
}

var a = longestWord("Web Development Tutorialaaaaaaaaaaa");
console.log(a);
*/

// Task # 13

/*
function countNumberOfOccurence(string, letter) {
  var count = 0;

  for (var i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      count++;
    }
  }
  return count;
}
var string = "helllo";
var letter = "l";

var returnCount = countNumberOfOccurence(string, letter);
document.write("The number of occurence of " + letter + " is " + returnCount);
*/

// Task # 14

/*
function calcCircumFerence(radius) {
  var circumference = 2 * 3.14 * radius;
  return circumference;
}

function calcArea(radius) {
  var area = 3.14 * radius ** 2;
  return area;
}

var circumference = calcCircumFerence(20);
document.write("The circumference is " + circumference + "<br>");

var area = calcArea(19);
document.write("The area is " + area);
*/
