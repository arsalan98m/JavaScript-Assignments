/*
// --------- Chapter 1 (ALERT) ----------
//  Task 1 (Write a script to greet your website visitor using JS alert box.)

alert("Hello JavaScript");

// Task 2 (Write a script to display following message on your web page:)

alert("Error! Please enter a valid password.");

// Task 3 (Write a script to display following message on your web page: (Hint : Use line break))

alert("Welcome to JS Land...\nHappy Coding!");

// Task 4 (Write a script to display following messages in sequence:)

alert("Welcome to JS Land...");
alert("Happy Coding!");
*/

// ---------- Chapter 2 (Variable For Strings) --------------

/*
// Task 1 (Declare a variable called username.)
var username;

// Task 2 (Declare a variable called myName & assign to it a string that represents your Full Name.)
var myName = "muhammad arsalan manzoor";

// Task 3 (Write script to: a) Declare a JS variable, titled message.,)
// b) Assign “Hello World” to variable message, c) Display the message in alert box.

var message;
message = "Hello world";
alert(message);

// Task 4 (Write a script to save student’s bio data in JS variables and show the data in alert boxes.)
var name = "arsalan";
var age = "15";
var course = "Certified Mobile Application Development";

alert(name);
alert(age + " years old");
alert(course);

// Task 5 (Write a script to display the following alert using one JS variable:)
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

// Task 6 (Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation))

var email = "arsalan90m@gmail.com";
alert("My email address is " + email);

// Task 7 (Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box)

var book = "A smarter way to lean JavaScript";
alert("I am trying to learn from the Book " + book);

// Task 8 (Write a script to display this in browser through JS)

document.write("Yah ! I can write HTML content thourgh JavaScript");

// Task 9 (Store the following string in a varaible and show in alert and browse through js)

var string = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(string);
*/

// -------- Chapter 3 (Variable for numbers) ---------------

/* 
// Task 1 (Declare a variable called age & assign to it your age. Show your age in an alert box.)
var age = 24;
alert("I am " + age + " years old");

// Task 2 (Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.)

var visitTimes = 14;
alert("You have visited this site " + visitTimes + " times.");

// Task 3 (Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:)

var birthYear = 1998;
document.write("My birth year is " + birthYear);
document.write("<br>");
document.write("Data type of my declared variable is " + typeof birthYear);
document.write("<br>");
*/

// Task 4

/*

4. A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to
order
Show the following message in your browser: “John
Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

*/

/*
var visitorsName = "arsalan";
var productTitle = "t-shirts";
var quantity = 10;

document.write(
  "<b>" +
    visitorsName +
    "</b>" +
    " ordered " +
    "<b>" +
    quantity +
    " " +
    productTitle +
    "</b>" +
    " on XYZ Clothing Store."
);
*/

// ---------- Chapter 4 : Variable Names Legal and Illegal -------------

// Task 1 (Declare 3 variables in one statement.)

var a, b, c;

// Task 2 (Declare 5 legal & 5 illegal variable names.)

/*
// legal variable names
var firstName;
var name1st;
var first_name;
var _firstname;
var first$name;

// illegal variable names
var first-name;
var 1stname;
var +name;
var first name;
var first%name;
*/

// Task 3

/*
document.write("<h1>Rules for naming JS Variables</h1>");
document.write(
  "variable names can only container, letters, numbers, dollars and underscore. for example: $my_1stVariable"
);
document.write("<br>");
document.write(
  "variable must begin with a letter, $ or _. for example: $name, _name, or name"
);
document.write("<br>");
document.write("Variable names are case sensitive");
document.write("<br>");
document.write("Variable names should not be JS keywords");
*/

// --------- Chapter 5 : Math Expressions --------------

// Task 1 and 2 (Write a program that take two numbers & add them in a new variable. Show the result in your browser.)

/*
var num_1 = parseInt(prompt("Enter first number"));
var num_2 = parseInt(prompt("Enter second number"));

sum = num_1 + num_2;
sub = num_1 - num_2;
mul = num_1 * num_2;
div = num_1 / num_2;

document.write("Sum of " + num_1 + " and " + num_2 + " is " + sum + "<br>");
document.write(
  "Subtraction of " + num_1 + " and " + num_2 + " is " + sub + "<br>"
);
document.write(
  "Multiplication of " + num_1 + " and " + num_2 + " is " + mul + "<br>"
);
document.write(
  "Division of " + num_1 + " and " + num_2 + " is " + div + "<br>"
);
*/

// Task 3

/*
var a;

document.write("Value after variable declarations is: " + a);
document.write("<br>");

a = 5;

document.write("Initial value: " + a);
document.write("<br>");

a++;

document.write("Value after increment is: " + a);
document.write("<br>");

a += 7;

document.write("Value after addition is: " + a);
document.write("<br>");

a--;

document.write("Value after decrement is: " + a);
document.write("<br>");

a = a % 3;

document.write("The remainder is: " + a);
*/

// Task 4

/*
movieCost = 600;
tickets = 5;

totalCost = movieCost * 5;

document.write(
  "Total cost to buy " + tickets + " tickets to a movie is " + totalCost + "PKR"
);
*/

// Task 5 (write a script to display multiplication table)

/*
table = parseInt(prompt("Enter your table"));

document.write("Table of " + table);
document.write("<br>");

for (var i = 1; i <= 10; i++) {
  document.write(table + " X " + i + " = " + table * i);
  document.write("<br>");
}
*/

// Task 6

/*
var celsius = 25;

var celsiusToFahrenheit = (celsius * 9) / 5 + 32;

document.write(celsius + "&#8451;" + " is " + celsiusToFahrenheit + "&#8457;");
document.write("<br>");

var fahrenheit = 70;

var fahrenheitToCelsius = ((fahrenheit - 32) * 5) / 9;
document.write(
  fahrenheit + "&#8457;" + " is " + fahrenheitToCelsius + "&#8451;"
);
*/

// Task 7

/*
var priceOfItem1 = 650;
var priceOfItem2 = 100;

var quantityOfItem1 = 3;
var quantityOfItem2 = 7;

var shippingCharges = 100;

var totalCost =
  priceOfItem1 * quantityOfItem1 +
  priceOfItem2 * quantityOfItem2 +
  shippingCharges;

document.write("Price of item 1 is " + priceOfItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityOfItem1 + "<br>");
document.write("Price of item 2 is " + priceOfItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityOfItem2 + "<br>");
document.write("Shpping Charges " + shippingCharges);

document.write("<br>");
document.write("<br>");

document.write("Total cost of your order is " + totalCost);
*/

// Task 8

/*
var totalMarks = 980;
var obtainedMarks = 804;

var percentage = (obtainedMarks / totalMarks) * 100;

document.write("Total Marks: " + totalMarks);
document.write("<br>");
document.write("Marks obtained: " + obtainedMarks);
document.write("<br>");
document.write("Percentage: " + percentage);
*/

// Task 9

/*
var usDollars = 10;
var pakistaniRupee = 104.8;
var convertToRupees = usDollars * pakistaniRupee;

document.write("<h1>Currency in PKR</h1>");
document.write("Total currency in PKR: " + convertToRupees);
*/

// Task 10

/*
var some_number = 8;

var answer = ((some_number + 5) * 10) / 2;

document.write(answer);
*/

// Task 11 (Age calculator)

/*
var currentYear = 2016;
var birthYear = 1992;

var age = currentYear - birthYear;

document.write("<h2>Age Calculator</h2>");
document.write("<br><br>");

document.write("Current Year: " + currentYear);
document.write("<br>");
document.write("Birth Year: " + birthYear);
document.write("<br>");
document.write("Your age is: " + age);
*/

// Task 12 (The Geometrizer)

/*
var radius = 20;
var circumferenceOfCircle = 2 * 3.142 * radius;
var area = 3.142 * radius ** 2;

document.write("<h2>The Geometrizer</h2>");
document.write("Radius of a circle: " + radius);
document.write("<br>");
document.write("The circumference is : " + circumferenceOfCircle);
document.write("<br>");
document.write("The area is: " + area);
*/

// Task 13 (The lifetime supply calculator)

/*
var favoriteSnack = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var amountOfSnaksPerDay = 3;
var totalEat = amountOfSnaksPerDay * 365 * (maxAge - currentAge);

var message =
  "You will need " +
  totalEat +
  " " +
  favoriteSnack +
  " to last you until the ripe old age of " +
  maxAge;

document.write(message);
*/

// ------------- Chapter 6 - 9 ---------------------

// Task 1 (Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:)

/*
var a = 10;

document.write("Result: " + "<br>");
document.write("The value of a is: " + a);
document.write("<br>");
document.write("...........................................");

document.write("<br>");
document.write("<br>");

++a;
document.write("The value of ++a is: " + a);
document.write("<br>");
document.write("Now the value of a is: " + a);

document.write("<br>");
document.write("<br>");

document.write("The value of a++ is: " + a);
a++;
document.write("<br>");
document.write("Now the value of a is: " + a);

document.write("<br>");
document.write("<br>");

--a;
document.write("The value of --a is: " + a);
document.write("<br>");
document.write("Now the value of a is: " + a);

document.write("<br>");
document.write("<br>");

document.write("The value of a-- is:" + a);
document.write("<br>");
a--;
document.write("Now the value of a is: " + a);
*/

// Task 2

/*
var a = 2;
var b = 1;

var result = --a - --b + ++b + b--;
//             1 - 0  +  1 + 1 ;

document.write("a is: " + a);
document.write("<br>");
document.write("b is :" + b);
document.write("<br>");
document.write("result is: " + result);
*/

// Task 3

/*
name = prompt("What is your name");
alert("Hello, " + name);
*/

// Task 4

/*
table = Number(prompt("Enter multiplication table"));

if (table) {
  for (var i = 1; i <= 10; i++) {
    document.write(table + " X " + i + " = " + table * i);
    document.write("<br>");
  }
} else {
  for (var i = 1; i <= 10; i++) {
    document.write("5" + "x" + i + " = " + 5 * i);
    document.write("<br>");
  }
}
*/

// Task 5

/*
var subject1 = prompt("Enter subject 1");
var subject2 = prompt("Enter subject 2");
var subject3 = prompt("Enter subject 3");

totalMarksOfEachSubject = 100;

var subject1Marks = parseInt(prompt("Enter " + subject1 + " marks"));
var subject2Marks = parseInt(prompt("Enter " + subject2 + " marks"));
var subject3Marks = parseInt(prompt("Enter " + subject3 + " marks"));

obtainedMarks = subject1Marks + subject2Marks + subject3Marks;
percentage = (obtainedMarks / 300) * 100;

document.write("<table>");
document.write("<tr>");
document.write("<th>Subject</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("<th>Percentage</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject1 + "</td>");
document.write("<td>" + totalMarksOfEachSubject + "</td>");
document.write("<td>" + subject1Marks + "</td>");
document.write(
  "<td>" + (subject1Marks / totalMarksOfEachSubject) * 100 + "%" + "</td>"
);
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject2 + "</td>");
document.write("<td>" + totalMarksOfEachSubject + "</td>");
document.write("<td>" + subject2Marks + "</td>");
document.write(
  "<td>" + (subject2Marks / totalMarksOfEachSubject) * 100 + "%" + "</td>"
);
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject3 + "</td>");
document.write("<td>" + totalMarksOfEachSubject + "</td>");
document.write("<td>" + subject3Marks + "</td>");
document.write(
  "<td>" + (subject3Marks / totalMarksOfEachSubject) * 100 + "%" + "</td>"
);
document.write("</tr>");

document.write("<tr>");
document.write("<td></td>");
document.write("<td><b>" + totalMarksOfEachSubject * 3 + "</b></td>");
document.write("<td><b>" + obtainedMarks + "</b></td>");
document.write("<td><b>" + percentage + "</b></td>");
*/

// ------------- Chapter 9 - 11 ---------------------

// Task 1

/*
city = prompt("What is your city");

if (city === "karachi") {
  alert("Welcome to city of lights");
} else {
  alert("Welcome to " + city);
}
*/

// Task 2

/*
gender = prompt("Enter your gender");

if (gender === "male") {
  alert("Good Morning Sir");
} else if (gender === "female") {
  alert("Good Morning Ma'am");
} else {
  alert("you typed wrong gender!");
}
*/

// Task 3

/*
colorOfRoad = prompt("Enter signal color");

if (colorOfRoad === "red") {
  alert("Must Stop");
} else if (colorOfRoad === "yellow") {
  alert("Ready to move");
} else if (colorOfRoad === "green") {
  alert("Move now");
} else {
  alert("wrong color of road try again!");
}
*/

// Task 4

/*
fuelInCar = parseInt(prompt("Enter remaining fuel in car"));

if (fuelInCar <  0.25) {
  alert("Please refill the fuel in your car");
} else {
  alert("you may go now");
}
*/

// Task 5

/*
var a = 4;

if (++a === 5) {
  alert("given condition for variable a is true");
} // condition is true

var b = 82;

if (b++ === 83) {
  alert("given condition for variable b is true");
} // condition is flase

var c = 12;

if (c++ == 13) {
  alert("condition 1 is true");
} // consition false

if (c === 13) {
  alert("condition 2 is true");
} // condition true

if (++c < 14) {
  alert("condition 3 is true");
}

if (c === 14) {
  alert("condition 4 is true");
}
*/

/*

var materialCost = 20000;
var labourCost = 2000;
var totalCost = materialCost + labourCost;

if (totalCost === labourCost + materialCost) {
  alert("The cost equals");
}

if (true) {
  alert("True");
}

if (false) {
  alert("False");
}

if ("car" < "car") {
  alert("car is smaller than cat");
}

*/

// Task 6 (Marksheet)

/*
var subject1 = parseInt(prompt("Enter subject 1 marks"));
var subject2 = parseInt(prompt("Enter subject 2 marks"));
var subject3 = parseInt(prompt("Enter subject 3 marks"));

var marksObtained = subject1 + subject2 + subject3;
var totalMarks = 300;
var percentage = (marksObtained / totalMarks) * 100;
var grade = "";
var remarks = "";

if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else {
  grade = "fail";
  remarks = "sorry";
}

document.write("<h1>Mark Sheet</h1><br>");
document.write("Total marks: " + totalMarks);
document.write("<br>");
document.write("Marks obtained: " + marksObtained);
document.write("<br>");
document.write("Percentage: " + percentage + "%");
document.write("<br>");
document.write("Grade: " + grade);
document.write("<br>");
document.write("Remarks: " + remarks);
*/

// Task 7 (Guess game)

/*
var secretNumber = 2;
var guessNumber = parseInt(prompt("Enter secret number"));

if (guessNumber === secretNumber) {
  alert("Bingo! Correct answer");
} else if (guessNumber + 1 === secretNumber) {
  alert("Close enough to correct answer");
} else {
  alert("try again");
}
*/

// Task 8 (Number is divisible by 3)

/*
var number = parseInt(prompt("Enter your number to check divisible by 3"));

if (number % 3 === 0) {
  alert("Number is divisible by 3");
} else {
  alert("Number is not divisible by 3");
}
*/

// Task 9 (odd or even number)

/*
var number = parseInt(
  prompt("Enter your number to check its odd or even number")
);

if (number % 2 === 0) {
  alert("Number is even");
} else if (number % 2 !== 0) {
  alert("Number is odd");
} else {
  alert("you typed wrong number try again");
}
*/

// Task 10 (temprature check)

/*
temperature = parseInt(prompt("Enter temperature"));

if (temperature > 40) {
  alert("It is too hot outside");
} else if (temperature > 30) {
  alert("The weather today is Normal");
} else if (temperature > 20) {
  alert("Today's weather is cool");
} else if (temperature > 10) {
  alert("OMG! Today's weather is cool");
}
*/

// Task 11 (calculator)

/*
var firstNumber = parseInt(prompt("Enter first number"));
var secondNumber = parseInt(prompt("Enter second number"));
var operator = prompt("Enter operator: eg. +, -, *, / , %");

if (operator === "+") {
  var sum = firstNumber + secondNumber;
  alert("Sum of " + firstNumber + " and " + secondNumber + " is " + sum);
} else if (operator === "-") {
  var sub = firstNumber - secondNumber;
  alert(
    "Subtraction of " + firstNumber + " and " + secondNumber + " is " + sub
  );
} else if (operator === "*") {
  var mul = firstNumber * secondNumber;
  alert(
    "Multiplication of " + firstNumber + " and " + secondNumber + " is " + mul
  );
} else if (operator === "/") {
  var div = firstNumber / secondNumber;
  alert("Division of " + firstNumber + " and " + secondNumber + " is " + div);
} else if (operator === "%") {
  modulus = firstNumber % secondNumber;
  alert(
    "Modulus of " + firstNumber + " and " + secondNumber + " is " + modulus
  );
} else {
  alert("you typed wrong operator");
}
*/

// ------------------------- Chapter 12 - 13 ------------------------------

// Task 1

/*
var character = prompt("Enter character");

var code = character.charCodeAt();

if (code >= 65 && code <= 90) {
  alert("This is uppercase letter");
} else if (code >= 97 && code <= 122) {
  alert("this is lower case letter");
} else if (isNaN(character) === false) {
  alert("this is a number");
} else {
  alert(character + " is not a number and letter");
}
*/

// Task 2

/*
var firstNumber = parseInt(prompt("Enter first number "));
var secondNumber = parseInt(prompt("Enter second number"));

if (firstNumber > secondNumber && secondNumber < firstNumber) {
  alert(firstNumber + " is greater than " + secondNumber);
} else if (secondNumber > firstNumber && firstNumber < secondNumber) {
  alert(firstNumber + " is less than " + secondNumber);
} else if (firstNumber === secondNumber) {
  alert(firstNumber + " is equal to " + secondNumber);
} else {
  alert("you typed wrong input");
}
*/

// Task 3

/*
var number = parseInt(prompt("Enter number"));

if (number >= 1) {
  alert("Number is Positive");
} else if (number < 0) {
  alert("Number is Negative");
} else if (number === 0) {
  alert("Number is Zero");
} else {
  alert("You typed wrong input");
}
*/

// Task 4

/*
var string = prompt("Enter a character");
var matchFound = false;

for (var i = 0; i < string.length; i++) {
  if (
    string[i] === "A" ||
    string[i] === "E" ||
    string[i] === "I" ||
    string[i] === "O" ||
    string[i] === "U" ||
    string[i] === "a" ||
    string[i] === "e" ||
    string[i] === "i" ||
    string[i] === "o" ||
    string[i] === "u"
  ) {
    alert("True");
    matchFound = true;
    break;
  }
}

if (!matchFound) {
  alert("False");
}
*/

// Task 5

/*
var correctPassword = "abcd";
var userPassword = prompt("Enter password");

if (!userPassword) {
  alert("Please enter your password");
} else if (correctPassword === userPassword) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}
*/

// Task 6

/*
var greeting;

var hour = 13;
if (hour < 18) {
  greeting = "Good day";
  alert(greeting);
} else {
  greeting = "Good evening";
  alert(greeting);
}
*/

// Task 7

/*
var time = +prompt("Enter time");

if (time >= 0000 && time < 1200) {
  alert("Good Morning");
} else if ((time >= 1200) & (time < 1700)) {
  alert("Good afternoon");
} else if (time >= 1700 && time < 2100) {
  alert("Good evening");
} else if (time >= 2100 && time <= 2359) {
  alert("Good night");
}
*/

// --------------- Chapter 14 - 16 ------------------------

// Task 1

var studentsName = ["taha", "amir", "bilal", "nasir", "umair"];

// Task 2

var newStudents = new Array("ahad", "bilal", "usman", "owais");

// Task 3

var stringsArray = ["true", "abc", "def"];

// Task 4

var numbersArray = [22, 12, 1, 90, 67];

// Task 5

var booleanArray = [true, false, true, true, false];

// Task 6

var mixedArray = [1, "abc", true, 9.2, null];

// Task 7

/*
var educationQualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M.Phil",
  "PhD",
];

document.write("<p>Qualifications</p><br>");

for (var i = 0; i < educationQualifications.length; i++) {
  document.write(i + 1 + ") " + educationQualifications[i]);
  document.write("<br>");
}
*/

// Task 8

/*
var studentNames = ["Michael", "John", "Tony"];
var scoreOfStudents = [320, 230, 480];

for (var i = 0; i < studentNames.length; i++) {
  document.write(
    "Score of " +
      studentNames[i] +
      " is " +
      scoreOfStudents[i] +
      "." +
      "Percentage: " +
      (scoreOfStudents[i] / 500) * 100 +
      "%"
  );
  document.write("<br>");
}
*/

// Task 9

/*
var colorNames = ["red", "green", "blue"];

document.write("Element: " + colorNames);
document.write("<br><br>");

// adding color to the beginning
var addColorBeginning = prompt(
  "What color you want to add to the beginning of array"
);
colorNames.unshift(addColorBeginning);
document.write(
  "Added color to the beginning of array: " + addColorBeginning + "<br>"
);
document.write("Updated Color: " + colorNames);
document.write("<br><br>");

// adding color to the end
var addColorToEnd = prompt("What color you want to add to the end of array");
colorNames.push(addColorToEnd);

document.write("Added color to the end of array: " + addColorToEnd + "<br>");
document.write("Updated Color: " + colorNames);
document.write("<br><br>");

// adding two or more color to the beginning
colorNames.unshift("white", "black");
document.write("Added two or more color to the beginning of array: " + "<br>");
document.write("Updated Color: " + colorNames);
document.write("<br><br>");

// deleting the first color in the array
colorNames.shift("white");
document.write("Deleting the first color: " + "white" + "<br>");
document.write("Updated Color: " + colorNames);
document.write("<br><br>");

// deleting the last color in the array
var deletingLast = colorNames.pop();
document.write("Deleting the last color: " + deletingLast + "<br>");
document.write("Updated Color: " + colorNames);
document.write("<br><br>");

// Asking user at which index he wants to add a color name then add color to desired index
var indexNo = parseInt(
  prompt("Which index you want to add color please type index number")
);
var colorName = prompt("Type color name");
colorNames.splice(indexNo, 0, colorName);
document.write("Asking user at whcih index he want to add color: " + "<br>");
document.write("Updated Color: " + colorNames);
document.write("<br><br>");

// Asking user at which index he wants to delete colors and how many color wants to delete then remove the same number

var startIndex = parseInt(prompt("Which index you want to delete colors"));
var deletingNumbers = parseInt(prompt("How many colors you want to delete"));
colorNames.splice(startIndex, deletingNumbers);
document.write(
  "Asking user at whcih index he want to delete and how many colors to delete: " +
    "<br>"
);
document.write("Updated Color: " + colorNames);
document.write("<br><br>");

*/

// Task 10

/*
var studentScores = [320, 230, 480, 120];

document.write("Scores of Students: " + studentScores);
document.write("<br>");
document.write("Ordered Scores of Students:" + studentScores.sort());
*/

// Task 11

/*
var cityNames = ["Karachi", "Lahore", "Islmabad", "Quetta", "Peshawar"];
var selectedCities = cityNames.slice(2, 4);

document.write("Cities list: " + cityNames);
document.write("<br>");
document.write("Selected cities list: " + selectedCities);
*/

// Task 12

/*
var arr = ["This", "is", "my", "cat"];

var string = arr.join(" ");

document.write("Array: <br>");
document.write(arr);
document.write("<br><br>");

document.write("String:<br>");
document.write(string);
*/

// Task 13

/*
var newArray = ["keyboard", "mouse", "printer", "monitor"];

document.write("Devices: <br>");
document.write(newArray);
document.write("<br><br><br>");

for (var i = 0; i < newArray.length; i++) {
  document.write("<br>" + "Out: <br>");
  document.write(newArray[i]);
}
*/

// Task 14

/*
var newArray = ["keyboard", "mouse", "printer", "monitor"];

document.write("Devices: <br>");
document.write(newArray);
document.write("<br><br><br>");

for (var i = newArray.length - 1; i >= 0; i--) {
  document.write("<br>" + "Out: <br>");
  document.write(newArray[i]);
}
*/

// Task 15

/*
var phoneManufactures = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];

document.write("<select>");
for (var i = 0; i < phoneManufactures.length; i++) {
  document.write("<option>" + phoneManufactures[i] + "</option>");
}

document.write("</select>");
*/

// ---------------------- Chapter 17 - 20 -----------------------------------

// Task 1

var multiDimArray = [[], [], []];

// Task 2

/*
var multiDimArray = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

for (var i = 0; i < multiDimArray.length; i++) {
  for (var j = 0; j < multiDimArray.length + 1; j++) {
    document.write(multiDimArray[i][j] + " ");
  }
  document.write("<br>");
}
*/

// Task 3

/*
for (var i = 1; i <= 10; i++) {
  document.write(i);
  document.write("<br>");
}
*/

// Task 4

/*
var tableNumber = parseInt(
  prompt("Enter a number to show its multiplication table")
);
var tableLength = parseInt(prompt("Enter length of multiplication table"));

document.write("Multiplication table of " + tableNumber);
document.write("<br>");
document.write("Length " + tableLength);
document.write("<br><br>");

for (var i = 1; i <= tableLength; i++) {
  document.write(tableNumber + " X " + i + " = " + tableNumber * i);
  document.write("<br>");
}
*/

// Task 5

/*
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "<br>");
}

document.write("<br><br>");

for (var j = 0; j < fruits.length; j++) {
  document.write("Element at index " + j + " is " + fruits[j] + "<br>");
}
*/

// Task 6

/*
document.write("<h4>Counting:</h4>");

for (var i = 1; i <= 15; i++) {
  document.write(i + "," + " ");
}

document.write("<h4>Reverse Counting:</h4>");
for (var i = 10; i > 0; i--) {
  document.write(i + "," + " ");
}

document.write("<h4>Even:</h4>");
for (var i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    document.write(i + "," + " ");
  }
}

document.write("<h4>Odd:</h4>");
for (var i = 0; i <= 20; i++) {
  if (i % 2 !== 0) {
    document.write(i + "," + " ");
  }
}

document.write("<h4>Series:</h4>");
for (var i = 2; i <= 20; i++) {
  if (i % 2 == 0) {
    document.write(i + "k," + " ");
  }
}
*/

// Task 7

/*
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var search = prompt(
  "Welcome to ABC Bakery. What do you want to order sir/ma'am"
);

var matchFound = false;

for (var i = 0; i < A.length; i++) {
  if (search === A[i]) {
    document.write(
      A[i] + " is <b>available</b> at index " + i + " in our bakery"
    );
    matchFound = true;
    break;
  }
}

if (!matchFound) {
  document.write(
    "We are sorry. " + search + " is <b>not available</b> in our bakery"
  );
}
*/

// Task 8

/*
var A = [24, 53, 78, 91, 12];
var largest = A[0];

document.write("Array items: " + A);
document.write("<br>");

for (var i = 0; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}

document.write("The largest number is " + largest);
*/

// Task 9

/*
var A = [24, 53, 78, 91, 12];
var smallest = A[0];

document.write("Array items: " + A);
document.write("<br>");

for (var i = 0; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i];
  }
}

document.write("The smallest number is " + smallest);
*/

// Task 10

/*
for (var i = 5; i <= 100; i++) {
  if (i % 5 === 0) {
    document.write(i + ",");
  }
}
*/
