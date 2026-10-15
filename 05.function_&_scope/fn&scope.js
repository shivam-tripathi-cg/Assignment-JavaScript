// Question 2
function greetStudent(name) {
  return `Hello ${name}, welcome to CodingGita!`;
}
console.log(greetStudent("Shivam"));
console.log(greetStudent("Rahul"));

// Question 3
greet(); 

function greet() {
  console.log("Good morning!");
}

// Question 4
const calculateAverage = function(a, b, c) {
  return (a + b + c) / 3;
};
console.log(calculateAverage(80, 90, 70)); 

// Question 5
function multiply(x, y) { 
    return x * y; 
} 
console.log(multiply(12, 5));

// Question 6
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(24)); 
console.log(isEven(17)); 

// Question 7
function findPercentage(obtainedMarks, totalMarks) {
  return (obtainedMarks / totalMarks) * 100;
}
console.log(findPercentage(456, 500)); 

// Question 8
function doNothing() {
  let a = 10 + 5;
}
console.log(doNothing()); 

// Question 9
const calculateSimpleInterest = function(principal, rate, time) {
  return (principal * rate * time) / 100;
};
console.log(calculateSimpleInterest(10000, 5, 2)); 

// Question 10
function studentScoreMessage(name, marks) {
  return `Student ${name} has scored ${marks} marks.`;
}
console.log(studentScoreMessage("Alice", 85));
console.log(studentScoreMessage("Bob", 92));

// Question 11
let course = "JavaScript"; 

function displayAge() {
  let age = 20; 
  console.log(age);
  console.log(course); 
}
displayAge();

// Question 12
function analyzeStudent(name, m1, m2, m3) {
  let total = m1 + m2 + m3;
  let average = total / 3;
  return `${name} scored total ${total} with average ${average.toFixed(2)}`;
}
console.log(analyzeStudent("John", 80, 90, 85));
console.log(analyzeStudent("Sara", 75, 88, 92));

// Question 13
function studentReport(name, m1, m2, m3) {
  function total() { 
    return m1 + m2 + m3;
  }
  return `${name} total marks: ${total()}`;
}
console.log(studentReport("Mike", 70, 80, 90));

// Question 14
function generateReport(name, m1, m2, m3) {
  let total = m1 + m2 + m3;
  let average = total / 3;
  let result = average >= 40 ? "Pass" : "Fail";
  
  return `Student Name: ${name} | Total: ${total} | Average: ${average.toFixed(2)} | Result: ${result}`;
}
console.log(generateReport("Emma", 50, 60, 55));
console.log(generateReport("Tom", 30, 40, 20));

// Question 15
const sumOfThree = (a, b, c) => a + b + c;
const averageOfTwo = (x, y) => (x + y) / 2;
const maxOfTwo = (a, b) => (a > b ? a : b);
const fullName = (first, last) => `${first} ${last}`;

console.log(sumOfThree(10, 20, 30));
console.log(averageOfTwo(50, 100));
console.log(maxOfTwo(45, 89));
console.log(fullName("John", "Doe"));

// Question 16
const calculateGrade = function(percentage) {
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B";
  if (percentage >= 60) return "C";
  if (percentage >= 40) return "D";
  return "F";
};
console.log(calculateGrade(95)); 
console.log(calculateGrade(82)); 
console.log(calculateGrade(67)); 
console.log(calculateGrade(45)); 
console.log(calculateGrade(32)); 

// Question 17
function calculateFinalPrice(price, discountPercent) {
  return price - (price * (discountPercent / 100));
}
console.log(calculateFinalPrice(2500, 15)); 
console.log(calculateFinalPrice(1200, 10)); 

// Question 18
const celsiusToFahrenheit = function(c) {
  return (c * 9/5) + 32;
};
const fahrenheitToCelsius = function(f) {
  return (f - 32) * 5/9;
};
console.log(celsiusToFahrenheit(0));   
console.log(celsiusToFahrenheit(100)); 
console.log(fahrenheitToCelsius(32));  
console.log(fahrenheitToCelsius(212)); 

// Question 19
function createMultiplier(multiplier) {
  function applyMultiplication(number) {
    return number * multiplier;
  }
  return applyMultiplication;
}
const double = createMultiplier(2);
console.log(double(10)); 

// Question 20
function processStudent(name, m1, m2, m3) {
  function getStats() {
    let total = m1 + m2 + m3;
    let average = total / 3;
    return { total, average };
  }
  
  let stats = getStats();
  let result = stats.average >= 40 ? "Pass" : "Fail";
  
  return `Report for ${name}: Total: ${stats.total}, Average: ${stats.average.toFixed(2)}, Result: ${result}`;
}

function compareAverages(avg1, avg2) {
  if (avg1 > avg2) return `First average (${avg1}) is higher.`;
  if (avg2 > avg1) return `Second average (${avg2}) is higher.`;
  return `Both averages are equal (${avg1}).`;
}

let student1 = processStudent("Alice", 80, 85, 90); 
let student2 = processStudent("Bob", 35, 40, 42);   
let student3 = processStudent("Charlie", 90, 92, 88); 

console.log(student1);
console.log(student2);
console.log(student3);

console.log(compareAverages(85, 39));
console.log(compareAverages(90, 90));