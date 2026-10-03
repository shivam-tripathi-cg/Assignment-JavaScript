// 1. Number > 10 and Divisibility by 3
let num1 = 18;
if (num1 > 10) {
  if (num1 % 3 === 0) {
    console.log("Greater than 10 and divisible by 3"); // Greater than 10 and divisible by 3
  }
}

// 2. Voting Eligibility with Voter ID
let personAge = 21;
let hasVoterID = true;
if (personAge >= 18) {
  if (hasVoterID) {
    console.log("Can Vote"); // Can Vote
  }
}

// 3. Score Distinction
let examScore = 85;
if (examScore >= 40) {
  if (examScore >= 80) {
    console.log("Passed with Distinction"); // Passed with Distinction
  }
}

// 4. Simple ATM System
let correctPin = 1234;
let enteredPin = 1234;
let accountBalance = 5000;
let withdrawalAmount = 2000;

if (enteredPin === correctPin) {
  if (accountBalance >= withdrawalAmount) {
    console.log("Withdrawal Successful"); // Withdrawal Successful
  }
}

// 5. Complete Leap Year check
let yearToCheck = 2000;
if (yearToCheck % 4 === 0) {
  if (yearToCheck % 100 === 0) {
    if (yearToCheck % 400 === 0) {
      console.log("Leap Year"); // Leap Year
    }
  }
}

// 6. Valid Email Check
let userEmail = "testuser@gmail.com";
if (userEmail.includes("@")) {
  if (userEmail.endsWith(".com")) {
    if (userEmail.length > 10) {
      console.log("Valid Email"); // Valid Email
    }
  }
}

// 7. Online Shopping Discount
let cartTotal = 1500;
let isPremiumMember = true;
let finalAmount = cartTotal;

if (cartTotal >= 1000) {
  if (isPremiumMember) {
    finalAmount = cartTotal - cartTotal * 0.20;
  } else {
    finalAmount = cartTotal - cartTotal * 0.10;
  }
}
console.log("Final Payable Amount: ₹" + finalAmount); // Final Payable Amount: ₹1200

// 8. Positive Even Divisible by 4
let checkNum = 16;
if (checkNum > 0) {
  if (checkNum % 2 === 0) {
    if (checkNum % 4 === 0) {
      console.log("Positive Even and Divisible by 4"); // Positive Even and Divisible by 4
    }
  }
}

// 9. Job Eligibility
let candidateAge = 25;
let hasGraduationDegree = true;
let experienceYears = 3;

if (candidateAge >= 21 && candidateAge <= 30) {
  if (hasGraduationDegree) {
    if (experienceYears >= 2) {
      console.log("Eligible for Interview"); // Eligible for Interview
    }
  }
}

// 10. Exam Eligibility
let isPresent = true;
let internalMarks = 32;
let externalMarks = 40;

if (isPresent) {
  if (internalMarks >= 30) {
    if (externalMarks >= 35) {
      console.log("Eligible for Final Exam"); // Eligible for Final Exam
    }
  }
}