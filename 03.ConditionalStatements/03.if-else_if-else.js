// 1. Month number to Season
let month = 4;
if (month === 12 || month === 1 || month === 2) {
  console.log("Winter");
} else if (month >= 3 && month <= 5) {
  console.log("Summer"); // Summer
} else if (month >= 6 && month <= 8) {
  console.log("Monsoon");
} else if (month >= 9 && month <= 11) {
  console.log("Autumn");
} else {
  console.log("Invalid Month");
}

// 2. Simple Tax Calculator
let income = 850000;
let tax = 0;
if (income < 300000) {
  tax = 0;
} else if (income <= 700000) {
  tax = income * 0.05;
} else if (income <= 1000000) {
  tax = income * 0.10;
} else {
  tax = income * 0.15;
}
console.log("Tax amount: ₹" + tax); // Tax amount: ₹85000

// 3. Student Grade Checker
let studentScore = 82;
if (studentScore >= 90) {
  console.log("Outstanding");
} else if (studentScore >= 70) {
  console.log("Good"); // Good
} else if (studentScore >= 40) {
  console.log("Average");
} else {
  console.log("Needs Improvement");
}

// 4. Vehicle Speed Checker
let speed = 65;
if (speed < 40) {
  console.log("Slow");
} else if (speed <= 80) {
  console.log("Normal"); // Normal
} else {
  console.log("Fast");
}

// 5. Height Category
let height = 165;
if (height < 150) {
  console.log("Short");
} else if (height <= 170) {
  console.log("Average"); // Average
} else {
  console.log("Tall");
}

// 6. Day Number to Weekday/Weekend
let dayNum = 6;
if (dayNum >= 1 && dayNum <= 5) {
  console.log("Weekday");
} else if (dayNum === 6 || dayNum === 7) {
  console.log("Weekend"); // Weekend
} else {
  console.log("Invalid Day");
}

// 7. Electricity Bill Calculator
let units = 120;
let bill = 0;
if (units <= 50) {
  bill = units * 2;
} else if (units <= 150) {
  bill = units * 4;
} else {
  bill = units * 6;
}
console.log("Total Bill: ₹" + bill); // Total Bill: ₹480

// 8. Attendance Category
let attendance = 88;
if (attendance >= 90) {
  console.log("Excellent");
} else if (attendance >= 75) {
  console.log("Good"); // Good
} else if (attendance >= 50) {
  console.log("Satisfactory");
} else {
  console.log("Poor");
}

// 9. Highest Mark among 3 Subjects
let mark1 = 78;
let mark2 = 92;
let mark3 = 85;
if (mark1 >= mark2 && mark1 >= mark3) {
  console.log("Highest Mark: " + mark1);
} else if (mark2 >= mark1 && mark2 >= mark3) {
  console.log("Highest Mark: " + mark2); // Highest Mark: 92
} else {
  console.log("Highest Mark: " + mark3);
}

// 10. Number classification
let val = -4;
if (val === 0) {
  console.log("Zero");
} else if (val > 0 && val % 2 === 0) {
  console.log("Positive Even");
} else if (val > 0 && val % 2 !== 0) {
  console.log("Positive Odd");
} else if (val < 0 && val % 2 === 0) {
  console.log("Negative Even"); // Negative Even
} else {
  console.log("Negative Odd");
}
