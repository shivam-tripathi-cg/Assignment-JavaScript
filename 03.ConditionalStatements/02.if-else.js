// 1. Even or Odd
let num1 = 7;
if (num1 % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd"); // Odd
}

// 2. Voting eligibility
let voterAge = 17;
if (voterAge >= 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible"); // Not Eligible
}

// 3. Positive or Negative
let num3 = -5;
if (num3 >= 0) {
  console.log("Positive");
} else {
  console.log("Negative"); // Negative
}

// 4. Pass or Fail
let studentMarks = 42;
if (studentMarks >= 35) {
  console.log("Passed"); // Passed
} else {
  console.log("Failed");
}

// 5. Check character case
let char = "G";
if (char >= "A" && char <= "Z") {
  console.log("Uppercase Letter"); // Uppercase Letter
} else {
  console.log("Not Uppercase Letter");
}

// 6. Divisibility by 3
let num6 = 12;
if (num6 % 3 === 0) {
  console.log("Divisible by 3"); // Divisible by 3
} else {
  console.log("Not Divisible by 3");
}

// 7. Password validation
let pass = "admin123";
if (pass === "admin123") {
  console.log("Login Successful"); // Login Successful
} else {
  console.log("Incorrect Password");
}

// 8. Leap year basic rule
let leapYearCandidate = 2024;
if (leapYearCandidate % 4 === 0) {
  console.log("Leap Year"); // Leap Year
} else {
  console.log("Not a Leap Year");
}

// 9. Greater of two numbers
let a = 15;
let b = 25;
if (a > b) {
  console.log(a + " is greater");
} else {
  console.log(b + " is greater"); // 25 is greater
}

// 10. Positive, Negative, or Zero using only if...else
let num10 = 0;
if (num10 > 0) {
  console.log("Positive");
} else {
  if (num10 < 0) {
    console.log("Negative");
  } else {
    console.log("Zero"); // Zero
  }
}