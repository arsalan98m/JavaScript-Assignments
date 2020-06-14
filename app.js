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
