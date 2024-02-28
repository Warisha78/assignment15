// Chapter 4
// Q1
// var first_name = "Warisha";
// var lastName = "Asif";
// var study = "Karachi University";
// document.write("My name is " + first_name + lastName + " i study in " + study);
// Q2
// Legal
// var user_name
// var FavBird
// var flower$
// var my_work
// var you_tube
// Illegal
// var my name
// var xyz*
// var auction!
// var 2Worker
// var @email
// Q3
// var heading$ = "<b> Rules For Naming JS Variables </b> <br>";
// var line_1st = " Variables can only contain number ,$ ,letters and underscores";
// var Example = "For example : $my_1stVariable <br>";
// var line_2nd = "Variable must begin with a letters , and _ ";
// var Example$ = "For example : $name_name or name <br>";
// var line_3rd = "Variable names are case sensitive <br>";
// var line_4th = "Variable name should not be JS keywords";
// document.write(
//   heading$ + line_1st + Example + line_2nd + Example$ + line_3rd + line_4th
// );
// pdf chapter 6-9
// Q1
// var a = 10;
// document.write(a + ++a - a++ - --a + a--);
// Q2
// var a = 2,
//   b = 1;
// document.write(
//   "--a is 1 <br> --a - --b is 0 <br> --a - --b + ++b is 1 <br> --a - --b + ++b + b-- is 3 <br> the result is 3 "
// );
// Q3
// var username = "Hello World \n Whats your Name";
// var whole = prompt(username);
// Q4
// var number = 5;
// var enter = prompt("Enter number");
// document.write(
//   number +
//     "x 1 =" +
//     number * 1 +
//     "<br>" +
//     number +
//     "x 2 =" +
//     number * 2 +
//     "<br>" +
//     number +
//     "x 1 =" +
//     number * 3 +
//     "<br>" +
//     number +
//     "x 2 =" +
//     number * 4 +
//     "<br>" +
//     number +
//     "x 1 =" +
//     number * 5 +
//     "<br>" +
//     number +
//     "x 2 =" +
//     number * 6 +
//     "<br>" +
//     number +
//     "x 1 =" +
//     number * 7 +
//     "<br>" +
//     number +
//     "x 2 =" +
//     number * 8 +
//     "<br>" +
//     number +
//     "x 1 =" +
//     number * 9 +
//     "<br>" +
//     number +
//     "x 2 =" +
//     number * 10 +
//     "<br>"
// );
// Q6
// // taking name
// var subject1 = prompt("Enter first subject name:");
// var subject2 = prompt("Enter second subject name:");
// var subject3 = prompt("Enter third subject name:");

// // Total marks for each subject
// var totalMarks = 100;

// // Display subject names and total marks
// document.getElementById("subjectName1").textContent = subject1;
// document.getElementById("subjectName2").textContent = subject2;
// document.getElementById("subjectName3").textContent = subject3;

// document.getElementById("totalMarks1").textContent = totalMarks;
// document.getElementById("totalMarks2").textContent = totalMarks;
// document.getElementById("totalMarks3").textContent = totalMarks;

// // Take obtained marks from user
// var obtainedMarks1 = parseFloat(
//   prompt("Enter obtained marks for " + subject1 + ":")
// );
// var obtainedMarks2 = parseFloat(
//   prompt("Enter obtained marks for " + subject2 + ":")
// );
// var obtainedMarks3 = parseFloat(
//   prompt("Enter obtained marks for " + subject3 + ":")
// );

// // Calculate total obtained marks
// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;

// // Calculate percentage
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// // Display total marks and percentage
// document.getElementById("obtainedMarks1").value = obtainedMarks1;
// document.getElementById("obtainedMarks2").value = obtainedMarks2;
// document.getElementById("obtainedMarks3").value = obtainedMarks3;

// document.getElementById("totalMarks").textContent = totalObtainedMarks;
// document.getElementById("percentage").textContent = percentage.toFixed(2) + "%";
// Home pdf
// Q1
var first = "x=";
var Last = "x+1";
var all = first + Last;
// Q2
var x = 100;
var fast = x - 1;
// Q3
// answer is 50
// Q4
// answer is 49
// Q5
var newNum = --x;
// Q6
var NewValue = x++;
// Q7
var x = 7;
alert(x++);
// Chapter 7
// answer is 14
// Q2
// answer is 20
// Q3
// answer is 20
// Q4
// answer is 18
// Q5
var state = (2 + 2) * (4 + 10);
// Q6
var cal = 2 + 2 * 4 + 10;
// Q7
var units = (4 / 2) * 4;
