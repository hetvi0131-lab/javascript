// Control Flow Statements in JavaScript
// If-Else Statement (if, if else, if else-if else)
// if (condition) {} --> condition true hoy to {) code run
if (12 < 13) {
console.log(true);
}

if (15 < 13) {
console.log(true);
} // condition is false that why if statement not run

if (!12) {
 console.log("number");
}

if (!0) {
console.log("number");
}

// if-else Statement
if (12 < 13) {
  console.log(true);
} else {
  console.log(false);
}

if (15 < 13) {
  console.log(true);
} else {
  // condition is false that's why the if statement doesn't run
  console.log(false); // if the condition is false then run this code
}

if (!12) {
  console.log("Number");
} else {
  console.log("Not A Number");
}

// if-else if-else Statement
/*
if (condition) {
} else if (condition) {
} else{}
*/

let loggedin = false;
let admin = false;

if (loggedin && admin) {
  console.log("welcome admin");
} else if (loggedin) {
  console.log("welcome user");
} else {
  console.log("go to login page");
}


let winter = true;
let cold = true;

if (winter && cold) {
  console.log("its a winter season");
} else if (winter) {
  console.log("the day is very cold");
} else {
  console.log("Its a winter month");
}


// Switch case Statement
switch ("BOGO") // value --> Case value sathe match karshe ane code run thase
{
  case "First50":
    console.log("50% Off on First Order");
    break;

  case "BOGO":
    console.log("Buy one get one");
    break;

  case "BlackFriday":
    console.log("It's Black Friday Sale - get at  Rs. 50");
    break;

  default:
    console.log("Offer Not Vaild");
}


switch ("Payment") // value --> Case value sathe match karshe ane code run thase
{
  case "UPI":
    console.log("Payment done through UPI");
    break;

  case "CARD":
    console.log("Payment done through Credit/Debit Card");
    break;

  case "CASH":
    console.log("Payment done with Cash");
    break;

  default:
    console.log("Invalid Payment Method");
}


// Early Return Pattern
function score(value) {
  if (value > 90) {
    return "Value is more than 90";
  } else if (value > 80) {
    return "Value is more than 80";
  } else if (value > 70) {
    return "Value is more than 70";
  } else if (value > 60) {
    return "Value is more than 60";
  } else {
    return "Value is more than 60";
  }
}

// score(65);
console.log(score(85));

// function score1(value) {
//   if (value > 90) return "Value is more than 90";
//   else if (value < 80) return "Value is less than 80";
//   else if (value < 70) return "Value is less than 70";
//   else if (value < 60) return "Value is less than 60";
//   else return "Value is less than 60";
// }

// score1(70);
// console.log(score1(70));


// EXAMPLE-1
let x = 2;

switch (x) {
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");
}


// EXAMPLE-2
function getGrade(score) {
  if (score < 0 || score > 100) {
    return "Invalid Marks";
  }

  if (score >= 90 && score <= 100) {
    return "A+";
  } else if (score >= 80 && score <= 89) {
    return "A";
  } else if (score >= 70 && score <= 79) {
    return "B";
  } else if (score >= 60 && score <= 69) {
    return "C";
  } else if (score >= 33 && score <= 59) {
    return "D";
  } else {
    return "Fail";
  }
}

console.log(getGrade(95)); // A+
console.log(getGrade(72)); // B
console.log(getGrade(30)); // Fail
console.log(getGrade(110)); // Invalid Marks
