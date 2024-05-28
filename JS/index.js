// Q1

/*
var printNum = Number(window.prompt("Please enter a num"))
console.log(printNum)
*/

// Q2

/*
var printNum = Number(window.prompt("Please enter a num"))
if (printNum % 3 == 0 && printNum % 4 == 0 ) {
    console.log("Yes")
}
else {
    console.log("No");
}
*/

// Q3

/*
var insert1 = Number(window.prompt("Please enter the first num"));
var insert2 = Number(window.prompt("Please enter the second num"));
if (insert1 > insert2) {
  console.log(insert1);
} else if (insert1 < insert2) {
  console.log(insert2);
}
*/

// Q4

/*
var insert1 = Number(window.prompt("Please enter a num"));
if (insert1 > 0) {
    console.log("Positive");
}
else if (insert1 < 0){
    console.log("Negative");
}
else {
    console.log("Zero");
}
*/

// Q5

/*
var insert1 = Number(window.prompt("Please enter the first num"));
var insert2 = Number(window.prompt("Please enter the second num"));
var insert3 = Number(window.prompt("Please enter the third num"));
if (insert1 > insert2 && insert1 > insert3  ) {
    console.log(insert1);
    if (insert2 > insert3){
        console.log(insert3);
    }
} 
else if (insert2 > insert1 && insert2 > insert3 ){
    console.log(insert2);
    if (insert1 > insert3){
        console.log(insert3);
    }
} 
else if (insert3 > insert1 && insert3 > insert2 ){
    console.log(insert3);
    if (insert1 > insert2){
        console.log(insert2);
    }
} 
*/

// Q6

/*
var insert1 = Number(window.prompt("Please enter the first num"));
if (insert1 % 2 == 0) {
    console.log("Even");
} else if (insert1 % 2 == 1) {
    console.log("Odd");
} else if (insert1 == 0) {
    console.log("Zero");
}
*/

// Q7

/*
var insert1 = window.prompt("Please enter a letter");
if (
  insert1 == "a" ||
  insert1 == "e" ||
  insert1 == "i" ||
  insert1 == "o" ||
  insert1 == "u"
) {
  console.log("vowels");
} else {
  console.log("consonant");
}
*/

// Q8

/*
var insert1 = Number(window.prompt("Please enter a num"));
for (var i = 1; i < insert1;i++) {
    console.log(i);
}
*/

// Q9

/*
var insert1 = Number(window.prompt("Please enter a num"));
for(var i = 1;i <=12;i++){
    console.log(insert1 * i);
}
*/

// Q10

/*
var insert1 = Number(window.prompt("Please enter a num"));
for (var i = 1; i < insert1; i++) {
    if (i % 2 == 0){
        console.log(i);
    }
}
*/

// Q11

/*
var insert1 = Number(window.prompt("Please enter a num"));
var insert2 = Number(window.prompt("Please enter a num"));
console.log(insert1 ** insert2);
*/

// Q12

/*
var insert1 = Number(window.prompt("Please enter a num"));
var insert2 = Number(window.prompt("Please enter a num"));
var insert3 = Number(window.prompt("Please enter a num"));
var insert4 = Number(window.prompt("Please enter a num"));
var insert5 = Number(window.prompt("Please enter a num"));
var total = Number(console.log(insert1 + insert2 + insert3 + insert4 + insert5));
Number(console.log( (insert1 + insert2 + insert3 + insert4 + insert5) / 5));
Number(console.log(((insert1 + insert2 + insert3 + insert4 + insert5) / 500) * 100));
// ليه لما كنت بستخدم الفاريابل كان بيطلعلي نان  
*/

// Q13

/*
var insert1 = Number(window.prompt("Please enter a Month Number"));
if (insert1 == 6 || insert1 == 4 || insert1 == 9 || insert1 == 11) {
    console.log("Days in that Month are: 30 Days");
} else if (insert1 == 2) {
    console.log("Days in that Month are: 28 Days 29 in leap year");
} else {
    console.log("Days in that Month are: 31 Days")
}
*/
// Q14

/*
var insert1 = Number(window.prompt("Please enter your Physics, grade"));
var insert2 = Number(window.prompt("Please enter your Chemistry, grade"));
var insert3 = Number(window.prompt("Please enter your Biology, grade"));
var insert4 = Number(window.prompt("Please enter your Mathematics grade"));
var insert5 = Number(window.prompt("Please enter your Computer grade"));
if (insert1 >= 90) {
    console.log("Your grade is A");
} else if (insert1 >= 80) {
    console.log("Your grade is B");
} else if (insert1 >= 70) {
    console.log("Your grade is C");
} else if (insert1 >= 40) {
    console.log("Your grade is E");
} else {
    console.log("Your grade is F");
}
if (insert2 >= 90) {
    console.log("Your grade is A");
} else if (insert2 >= 80) {
    console.log("Your grade is B");
} else if (insert2 >= 70) {
    console.log("Your grade is C");
} else if (insert2 >= 40) {
    console.log("Your grade is E");
} else {
    console.log("Your grade is F");
}
if (insert3 >= 90) {
    console.log("Your grade is A");
} else if (insert3 >= 80) {
    console.log("Your grade is B");
} else if (insert3 >= 70) {
    console.log("Your grade is C");
} else if (insert3 >= 40) {
    console.log("Your grade is E");
} else {
    console.log("Your grade is F");
}
if (insert4 >= 90) {
    console.log("Your grade is A");
} else if (insert4 >= 80) {
    console.log("Your grade is B");
} else if (insert4 >= 70) {
    console.log("Your grade is C");
} else if (insert4 >= 40) {
    console.log("Your grade is E");
} else {
    console.log("Your grade is F");
}
if (insert5 >= 90) {
    console.log("Your grade is A");
} else if (insert5 >= 80) {
    console.log("Your grade is B");
} else if (insert5 >= 70) {
    console.log("Your grade is C");
} else if (insert5 >= 40) {
    console.log("Your grade is E");
} else {
    console.log("Your grade is F");
}
*/

// Q15

/*
var insert1 = Number(window.prompt("Please enter a Month Number"));
switch (insert1) {
  case 2:
    console.log("Days in that Month are: 28 Days, 29 in a leap year");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Days in that Month are: 30 Days");
    break;
  default:
    console.log("Days in that Month are: 31 Days");
    break;
}
*/

// Q16

/*
var insert1 = window.prompt("Please enter a letter");
switch (insert1) {
  case "a":
  case "u":
  case "o":
  case "i":
  case "e":
    console.log("vowels");
    break;

  default:
    console.log("consonant");
    break;
}
*/

// Q17

/* 
var insert1 = Number(window.prompt("Please enter the first num"));
var insert2 = Number(window.prompt("Please enter the second num"));
switch (true) {
    case insert1 > insert2:
        console.log(insert1);
        break;
    case insert2 > insert1:
        console.log(insert2);
        break;
    default:
        console.log("Both numbers are equal");
        break;
}
*/

// Q18

/* 
var insert1 = Number(window.prompt("Please enter the second num"));
switch (true) {
    case insert1 % 2 == 0:
        console.log("Even");
        break;
    case insert1 % 2 == 1:
        console.log("odd");
        break;  
}
*/

// Q19

/*
var insert1 = Number(window.prompt("Please enter the second num"));
switch (true) {
    case insert1 > 0:
        console.log("Positive");
        break;
    case insert1 < 0:
        console.log("Negative");
        break;  
}
*/

// Q19

/*
var insert1 = Number(window.prompt("Please enter the first num"));
var operator = window.prompt("Please enter the operator")
var insert2 = Number(window.prompt("Please enter the second num"));
switch (operator) {
    case "+":
        console.log(insert1 + insert2);
        break;
    case "-":
        console.log(insert1 - insert2);
        break;
    case "/":
        console.log(insert1 / insert2);
        break;
    case "*":
        console.log(insert1 * insert2);
        break;
}
*/


                                    /* DONE */