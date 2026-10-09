// 1. Count days hotter than 30°C
let temperatures = [28, 32, 25, 40, 18, 35];
let hotDays = 0;
for (let i = 0; i < temperatures.length; i++) {
  if (temperatures[i] > 30) {
    hotDays++;
  }
}
console.log("Days hotter than 30°C:", hotDays); // Days hotter than 30°C: 3


// 2. Calculate sum of digits of a given number
let num = 4729;
let numStr = num.toString();
let sum = 0;
for (let i = 0; i < numStr.length; i++) {
  sum += Number(numStr[i]);
}
console.log("Sum of digits:", sum); // Sum of digits: 22


// 3. Numbers between 1 and 100 divisible by 3 and 5, but not by 7
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
    console.log(i);
  }
}
// 15
// 30
// 45
// 60
// 75
// 90


// 4. Extract consonants from string "JavaScript"
let text = "JavaScript";
let consonants = "";
let vowels = "aeiouAEIOU";
for (let i = 0; i < text.length; i++) {
  if (!vowels.includes(text[i])) {
    consonants += text[i];
  }
}
console.log("Consonants:", consonants); // Consonants: JvScrpt


// 5. Find second-largest number without sorting
let numbers = [10, 45, 2, 99, 45, 88, 99];
let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    secondLargest = largest;
    largest = numbers[i];
  } else if (numbers[i] > secondLargest && numbers[i] < largest) {
    secondLargest = numbers[i];
  }
}
console.log("Second Largest:", secondLargest); // Second Largest: 88


// 6. Check if a number is a perfect number
let checkNum = 28;
let divisorSum = 0;
for (let i = 1; i < checkNum; i++) {
  if (checkNum % i === 0) {
    divisorSum += i;
  }
}
if (divisorSum === checkNum) {
  console.log(checkNum + " is a Perfect Number"); // 28 is a Perfect Number
} else {
  console.log(checkNum + " is Not a Perfect Number");
}


// 7. Print series: 1 2 4 8 16 32 64 128
let seriesStr = "";
for (let i = 1; i <= 128; i *= 2) {
  seriesStr += i + " ";
}
console.log(seriesStr.trim()); // 1 2 4 8 16 32 64 128


// 8. Print first 20 Fibonacci numbers
let fib1 = 0;
let fib2 = 1;
let fibSeries = "";

for (let i = 1; i <= 20; i++) {
  fibSeries += fib1 + " ";
  let nextFib = fib1 + fib2;
  fib1 = fib2;
  fib2 = nextFib;
}
console.log(fibSeries.trim()); 
// 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181


// 9. Average score and count of students scoring above average
let scores = [45, 78, 90, 32, 56, 88];
let totalScore = 0;

for (let i = 0; i < scores.length; i++) {
  totalScore += scores[i];
}

let average = totalScore / scores.length;
let aboveAverageCount = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] > average) {
    aboveAverageCount++;
  }
}

console.log("Average Score:", average); // Average Score: 64.83333333333333
console.log("Students above average:", aboveAverageCount); // Students above average: 3


// 10. Decimal to Binary representation
let decimalNum = 25;
let binaryStr = "";

if (decimalNum === 0) {
  binaryStr = "0";
} else {
  for (let temp = decimalNum; temp > 0; temp = Math.floor(temp / 2)) {
    binaryStr = (temp % 2) + binaryStr;
  }
}
console.log("Binary of " + decimalNum + ":", binaryStr); // Binary of 25: 11001