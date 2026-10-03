// 1. Month to number of days
let monthNum = 2;
switch (monthNum) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    console.log("31 Days");
    break;
  case 4: case 6: case 9: case 11:
    console.log("30 Days");
    break;
  case 2:
    console.log("28/29 Days"); // 28/29 Days
    break;
  default:
    console.log("Invalid Month Number");
}

// 2. Vowel or Consonant
let letter = "e";
switch (letter.toLowerCase()) {
  case "a": case "e": case "i": case "o": case "u":
    console.log("Vowel"); // Vowel
    break;
  default:
    console.log("Consonant");
}

// 3. Season mapping using multiple cases
let seasonCode = 3;
switch (seasonCode) {
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
    console.log("Summer"); // Summer
    break;
  default:
    console.log("Other Season");
}

// 4. Assign class based on marks using switch (true)
let studentMarks = 68;
switch (true) {
  case (studentMarks >= 75):
    console.log("Distinction");
    break;
  case (studentMarks >= 60):
    console.log("1st class"); // 1st class
    break;
  case (studentMarks >= 50):
    console.log("2nd class");
    break;
  case (studentMarks >= 35):
    console.log("3rd class");
    break;
  default:
    console.log("Failed");
}

// 5. Nested switch for Role and Action
let role = "admin";
let action = "create";

switch (role) {
  case "admin":
    switch (action) {
      case "create":
        console.log("Item Created by Admin"); // Item Created by Admin
        break;
      case "edit":
        console.log("Item Edited by Admin");
        break;
      case "delete":
        console.log("Item Deleted by Admin");
        break;
    }
    break;
  case "user":
    console.log("Limited Access");
    break;
  default:
    console.log("Invalid Role");
}

// 6. Predict, explain, and correct original fallthrough snippet:
// PREDICTION: All cases starting from "mango" run because break statements were missing.
// Corrected Code:
let fruit = "mango";
switch (fruit) {
  case "apple":
    console.log("Apple is red");
    break;
  case "mango":
    console.log("Mango is yellow"); // Mango is yellow
    break;
  case "banana":
    console.log("Banana is yellow");
    break;
  default:
    console.log("Unknown fruit");
}

// 7. Type-matching switch
// NOTE: Switch evaluates using strict comparison (===).
// Variables like 0, "0", false, null, and undefined won't match across types automatically without exact case matching.
let testVal = "0";
switch (testVal) {
  case 0:
    console.log("Type: Number 0");
    break;
  case "0":
    console.log("Type: String '0'"); // Type: String '0'
    break;
  case false:
    console.log("Type: Boolean false");
    break;
  case null:
    console.log("Type: Null");
    break;
  case undefined:
    console.log("Type: Undefined");
    break;
  default:
    console.log("Unknown Type/Value");
}

// 8. Calculator with Division by Zero check
let op = "/";
let numA = 10;
let numB = 0;

switch (op) {
  case "+":
    console.log(numA + numB);
    break;
  case "-":
    console.log(numA - numB);
    break;
  case "*":
    console.log(numA * numB);
    break;
  case "/":
    if (numB === 0) {
      console.log("Error: Division by zero is not allowed."); // Error: Division by zero is not allowed.
    } else {
      console.log(numA / numB);
    }
    break;
  case "%":
    console.log(numA % numB);
    break;
  case "**":
    console.log(numA ** numB);
    break;
  default:
    console.log("Invalid Operator");
}

// 9. Day Range using switch (true)
let dateOfMonth = 15;
switch (true) {
  case (dateOfMonth >= 1 && dateOfMonth <= 10):
    console.log("Beginning of the month");
    break;
  case (dateOfMonth >= 11 && dateOfMonth <= 20):
    console.log("Middle of the month"); // Middle of the month
    break;
  case (dateOfMonth >= 21 && dateOfMonth <= 31):
    console.log("End of the month");
    break;
  default:
    console.log("Invalid Date");
}

// 10. Multi-level nested switch for Food Ordering System
let category = "veg";
let item = "paneer";
let size = "full";

switch (category) {
  case "veg":
    switch (item) {
      case "paneer":
        switch (size) {
          case "half":
            console.log("Order: Paneer (Half) - ₹120");
            break;
          case "full":
            console.log("Order: Paneer (Full) - ₹200"); // Order: Paneer (Full) - ₹200
            break;
        }
        break;
    }
    break;
  case "nonveg":
    console.log("Non-Veg Selected");
    break;
}