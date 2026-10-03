// 1. Divisibility by 7
let num1 = 21;
let res1 = (num1 % 7 === 0) ? "Divisible by 7" : "Not Divisible by 7";
console.log(res1); // Divisible by 7

// 2. Temperature Check
let currentTemp = 32;
let res2 = (currentTemp >= 30) ? "Hot Day" : "Pleasant Day";
console.log(res2); // Hot Day

// 3. Empty String Check
let text = "";
let res3 = (text === "") ? "Empty String" : "String has content";
console.log(res3); // Empty String

// 4. Age Classifier
let userAge = 16;
let res4 = (userAge < 13) ? "Child" : (userAge <= 19) ? "Teenager" : "Adult";
console.log(res4); // Teenager

// 5. Greater of three numbers
let x = 12, y = 25, z = 18;
let res5 = (x >= y && x >= z) ? x : (y >= z) ? y : z;
console.log(res5); // 25

// 6. Student Marks Classification
let studentMark = 65;
let res6 = (studentMark >= 75) ? "Distinction" : (studentMark >= 60) ? "First Class" : (studentMark >= 50) ? "Second Class" : (studentMark >= 35) ? "Pass" : "Fail";
console.log(res6); // First Class

// 7. Number Status Classification
let val = -3;
let res7 = (val === 0) ? "Zero" : (val > 0) ? ((val % 2 === 0) ? "Positive Even" : "Positive Odd") : ((val % 2 === 0) ? "Negative Even" : "Negative Odd");
console.log(res7); // Negative Odd

// 8. Leap Year Full Logic
let yearNum = 2024;
let res8 = (yearNum % 4 === 0 && (yearNum % 100 !== 0 || yearNum % 400 === 0)) ? "Leap Year" : "Not a Leap Year";
console.log(res8); // Leap Year

// 9. Role/Action Decision Tree
let userRole = "admin";
let userAction = "delete";
let res9 = (userRole === "admin") ? ((userAction === "delete") ? "Admin Delete" : (userAction === "edit") ? "Admin Edit" : "Admin Other") : (userRole === "user") ? ((userAction === "view") ? "User View" : "User Restricted") : "Invalid Role";
console.log(res9); // Admin Delete

// 10. Discount and Final Amount Calculation
let totalCart = 3000;
let res10 = (totalCart >= 5000) ? { discount: "20%", payable: totalCart * 0.8 } : (totalCart >= 2000) ? { discount: "10%", payable: totalCart * 0.9 } : (totalCart >= 1000) ? { discount: "5%", payable: totalCart * 0.95 } : { discount: "0%", payable: totalCart };
console.log(res10); // { discount: '10%', payable: 2700 }