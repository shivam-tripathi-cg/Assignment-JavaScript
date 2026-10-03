// Part A: Arithmetic Operators

// 1. Addition +
let collectionClass1 = 15000;
let collectionClass2 = 12500;
let totalCollection = collectionClass1 + collectionClass2;
console.log(totalCollection); // 27500

let morningPages = 18;
let eveningPages = 25;
let totalPages = morningPages + eveningPages;
console.log(totalPages); // 43

let itemsMonday = 125;
let itemsTuesday = 178;
let totalItems = itemsMonday + itemsTuesday;
console.log(totalItems); // 303

// Additional Questions (Addition)
let a1 = "10";
let b1 = 5;
let result1 = a1 + b1;
console.log(result1); // "105"

let x1 = 5;
let y1 = "3";
let result2 = x1 + y1;
console.log(result2); // "53"

let p1 = "Hello";
let q1 = "World";
let result3 = p1 + " " + q1;
console.log(result3); // "Hello World"

let m1 = 0;
let n1 = false;
let result4 = m1 + n1;
console.log(result4); // 0

let val1 = 100;
let val2 = "200";
let val3 = val1 + val2;
console.log(val3); // "100200"


// 2. Subtraction -
let totalSeats = 80;
let occupiedSeats = 53;
let emptySeats = totalSeats - occupiedSeats;
console.log(emptySeats); // 27

let totalMarks = 500;
let lostMarks = 35;
let finalMarks = totalMarks - lostMarks;
console.log(finalMarks); // 465

let totalBoxes = 2500;
let sentBoxes = 875;
let remainingBoxes = totalBoxes - sentBoxes;
console.log(remainingBoxes); // 1625

// Additional Questions (Subtraction)
let a2 = "10";
let b2 = 3;
let result5 = a2 - b2;
console.log(result5); // 7

let x2 = "20";
let y2 = "5";
let result6 = x2 - y2;
console.log(result6); // 15

let p2 = "abc";
let q2 = 1;
let result7 = p2 - q2;
console.log(result7); // NaN

let m2 = 10;
let n2 = 0;
let result8 = m2 / n2;
console.log(result8); // Infinity

let valSub = 0 / 0;
console.log(valSub); // NaN


// 3. Multiplication *
let notebookCost = 45;
let totalNotebooks = 8;
let totalNotebookCost = notebookCost * totalNotebooks;
console.log(totalNotebookCost); // 360

let productionRate = 120;
let hours = 6;
let totalProduction = productionRate * hours;
console.log(totalProduction); // 720

let gardenRows = 7;
let plantsPerRow = 15;
let totalPlants = gardenRows * plantsPerRow;
console.log(totalPlants); // 105

// Additional Questions (Multiplication)
let a3 = "5";
let b3 = 4;
let result9 = a3 * b3;
console.log(result9); // 20

let x3 = "10";
let y3 = "2";
let result10 = x3 * y3;
console.log(result10); // 20

let p3 = "hello";
let q3 = 2;
let result11 = p3 * q3;
console.log(result11); // NaN

let m3 = 5;
let n3 = "0";
let result12 = m3 * n3;
console.log(result12); // 0

let valMult1 = 3;
let valMult2 = "4";
let valMult3 = valMult1 * valMult2;
console.log(valMult3); // 12


// 4. Division /
let totalPencils = 144;
let totalStudents = 12;
let pencilsPerStudent = totalPencils / totalStudents;
console.log(pencilsPerStudent); // 12

let totalDistance = 360;
let totalHours = 6;
let averageSpeed = totalDistance / totalHours;
console.log(averageSpeed); // 60

let totalAmount = 72000;
let totalDepartments = 9;
let amountPerDepartment = totalAmount / totalDepartments;
console.log(amountPerDepartment); // 8000

// Additional Questions (Division)
let a4 = "20";
let b4 = 4;
let result13 = a4 / b4;
console.log(result13); // 5

let x4 = "100";
let y4 = "5";
let result14 = x4 / y4;
console.log(result14); // 20

let p4 = 10;
let q4 = 0;
let result15 = p4 / q4;
console.log(result15); // Infinity

let m4 = -10;
let n4 = 0;
let result16 = m4 / n4;
console.log(result16); // -Infinity

let valDiv = 0 / 0;
console.log(valDiv); // NaN


// 5. Modulus %
let totalStudentsGroup = 53;
let groupSize = 5;
let leftOverStudents = totalStudentsGroup % groupSize;
console.log(leftOverStudents); // 3

let totalCandies = 128;
let candiesPerBox = 10;
let unpackedCandies = totalCandies % candiesPerBox;
console.log(unpackedCandies); // 8

let userNumber = 27;
let isEven = userNumber % 2 === 0;
console.log(isEven); // false

let totalToys = 237;
let toysPerBox = 6;
let leftOverToys = totalToys % toysPerBox;
console.log(leftOverToys); // 3

let waitingPeople = 185;
let busCapacity = 40;
let leftOverPeople = waitingPeople % busCapacity;
console.log(leftOverPeople); // 25

// Additional Questions (Modulus)
let a5 = 10;
let b5 = 0;
let result17 = a5 % b5;
console.log(result17); // NaN

let x5 = 0;
let y5 = 5;
let result18 = x5 % y5;
console.log(result18); // 0

let p5 = -10;
let q5 = 3;
let result19 = p5 % q5;
console.log(result19); // -1

let m5 = 10;
let n5 = -3;
let result20 = m5 % n5;
console.log(result20); // 1

let valMod1 = -10;
let valMod2 = -3;
let valMod3 = valMod1 % valMod2;
console.log(valMod3); // -1


// 6. Exponentiation **
let cubeSide = 6;
let cubeVolume = cubeSide ** 3;
console.log(cubeVolume); // 216

let hoursPassed = 4;
let bacteriaCount = 1 * 2 ** hoursPassed;
console.log(bacteriaCount); // 16

let gridSide = 9;
let totalGridCells = gridSide ** 2;
console.log(totalGridCells); // 81

let baseValue = 5;
let powerValue = 4;
let exponentResult = baseValue ** powerValue;
console.log(exponentResult); // 625

let imagePixels = 1024;
let totalPixels = imagePixels ** 2;
console.log(totalPixels); // 1048576

// Additional Questions (Exponentiation)
let sideExp = -2;
let areaExp = sideExp ** 2;
console.log(areaExp); // 4

let baseExp = 2;
let powerExp = -1;
let result21 = baseExp ** powerExp;
console.log(result21); // 0.5

let valExp = 2 ** -2;
console.log(valExp); // 0.25

let xExp = 3;
let yExp = 2;
let zExp = xExp ** yExp;
console.log(zExp); // 9

let aExp = 10;
let bExp = 0;
let result22 = aExp ** bExp;
console.log(result22); // 1


// Part B: Assignment Operators

// 1. Simple Assignment =
let myAge = 21;
console.log(myAge); // 21

let penPrice = 15;
console.log(penPrice); // 15

let daysInWeek = 7;
console.log(daysInWeek); // 7

let city = "Ahmedabad";
console.log(city); // "Ahmedabad"

let piValue = 3.14159;
console.log(piValue); // 3.14159

// Additional Questions (Simple Assignment)
let assignA, assignB, assignC;
assignA = assignB = assignC = 10;
console.log(assignA, assignB, assignC); // 10 10 10

let assignX = 5;
let assignY = assignX;
assignX = 10;
console.log(assignX, assignY); // 10 5

let assignP = 100;
let assignQ = assignP;
let assignR = assignQ;
console.log(assignP, assignQ, assignR); // 100 100 100

let assignM = "Hello";
let assignN = assignM;
assignM = "World";
console.log(assignM, assignN); // "World" "Hello"

let assignVal1 = 25;
let assignVal2 = assignVal1;
let assignVal3 = assignVal2;
console.log(assignVal1, assignVal2, assignVal3); // 25 25 25


// 2. Add and Assign +=
let studentScore = 200;
studentScore += 35;
console.log(studentScore); // 235

let accountBalance = 5000;
accountBalance += 1200;
console.log(accountBalance); // 6200

let batteryLevel = 45;
batteryLevel += 30;
console.log(batteryLevel); // 75

let gamePoints = 1250;
gamePoints += 375;
console.log(gamePoints); // 1625

let libraryBooks = 840;
libraryBooks += 160;
console.log(libraryBooks); // 1000

// Additional Questions (Add and Assign)
let addA = "10";
addA += 5;
console.log(addA); // "105"

let addX = 5;
addX += "3";
console.log(addX); // "53"

let addP = 0;
addP += false;
console.log(addP); // 0

let addM = 10;
addM += true;
console.log(addM); // 11

let addVal = "Hello";
addVal += "World";
console.log(addVal); // "HelloWorld"


// 3. Subtract and Assign -=
let waterTankLitres = 1000;
waterTankLitres -= 375;
console.log(waterTankLitres); // 625

let studentRupees = 500;
studentRupees -= 180;
console.log(studentRupees); // 320

let phoneBattery = 90;
phoneBattery -= 45;
console.log(phoneBattery); // 45

let warehouseBoxes = 2400;
warehouseBoxes -= 950;
console.log(warehouseBoxes); // 1450

let playerScore = 2000;
playerScore -= 625;
console.log(playerScore); // 1375

// Additional Questions (Subtract and Assign)
let subA = "20";
subA -= 5;
console.log(subA); // 15

let subX = "100";
subX -= "50";
console.log(subX); // 50

let subP = 10;
subP -= "abc";
console.log(subP); // NaN

let subM = 5;
subM -= true;
console.log(subM); // 4

let subVal = 20;
subVal -= false;
console.log(subVal); // 20


// 4. Multiply and Assign *=
let townPopulation = 5000;
townPopulation *= 3;
console.log(townPopulation); // 15000

let dailyUnits = 120;
dailyUnits *= 4;
console.log(dailyUnits); // 480

let savingsAmount = 2000;
savingsAmount *= 2;
console.log(savingsAmount); // 4000

let totalGardenPlants = 50;
totalGardenPlants *= 5;
console.log(totalGardenPlants); // 250

let currentScore = 150;
currentScore *= 3;
console.log(currentScore); // 450

// Additional Questions (Multiply and Assign)
let mulA = "10";
mulA *= 2;
console.log(mulA); // 20

let mulX = "5";
mulX *= "4";
console.log(mulX); // 20

let mulP = "hello";
mulP *= 2;
console.log(mulP); // NaN

let mulM = 5;
mulM *= "0";
console.log(mulM); // 0

let mulVal = 3;
mulVal *= "4";
console.log(mulVal); // 12


// 5. Divide and Assign /=
let clothMeters = 1200;
clothMeters /= 4;
console.log(clothMeters); // 300

let totalBudget = 80000;
totalBudget /= 8;
console.log(totalBudget); // 10000

let sugarGrams = 960;
sugarGrams /= 6;
console.log(sugarGrams); // 160

let tripDistance = 450;
tripDistance /= 5;
console.log(tripDistance); // 90

let totalStudentMarks = 2500;
totalStudentMarks /= 10;
console.log(totalStudentMarks); // 250

// Additional Questions (Divide and Assign)
let divA = "100";
divA /= 5;
console.log(divA); // 20

let divX = "200";
divX /= "4";
console.log(divX); // 50

let divP = 10;
divP /= 0;
console.log(divP); // Infinity

let divM = -10;
divM /= 0;
console.log(divM); // -Infinity

let divVal = 0;
divVal /= 0;
console.log(divVal); // NaN


// 6. Modulus and Assign %=
let candiesInShop = 137;
candiesInShop %= 10;
console.log(candiesInShop); // 7

let coachStudents = 250;
coachStudents %= 7;
console.log(coachStudents); // 5

let projectDays = 1000;
projectDays %= 7;
console.log(projectDays); // 6

let hallChairs = 89;
hallChairs %= 5;
console.log(hallChairs); // 4

let loanMonths = 365;
loanMonths %= 12;
console.log(loanMonths); // 5

// Additional Questions (Modulus and Assign)
let modA = 10;
modA %= 0;
console.log(modA); // NaN

let modX = 0;
modX %= 5;
console.log(modX); // 0

let modP = -10;
modP %= 3;
console.log(modP); // -1

let modM = 10;
modM %= -3;
console.log(modM); // 1

let modVal = -10;
modVal %= -3;
console.log(modVal); // -1


// 7. Exponentiation and Assign **=
let gardenSideLength = 10;
gardenSideLength **= 2;
console.log(gardenSideLength); // 100

let cubeBoxEdge = 4;
cubeBoxEdge **= 3;
console.log(cubeBoxEdge); // 64

let sizeFactor = 3;
sizeFactor **= 2;
console.log(sizeFactor); // 9

// Additional Questions (Exponentiation and Assign)
let expA = -2;
expA **= 2;
console.log(expA); // 4

let expBase = 2;
expBase **= -1;
console.log(expBase); // 0.5

let expVal = 2;
expVal **= -2;
console.log(expVal); // 0.25

let expX = 3;
expX **= 0;
console.log(expX); // 1

let expY = 10;
expY **= 1;
console.log(expY); // 10


// Part C: Comparison & Relational Operators

// 1. Loose Equality ==
let storedPass = 1234;
let enteredPass = "1234";
console.log(storedPass == enteredPass); // true

let userAnswer = 0;
let defaultAnswer = false;
console.log(userAnswer == defaultAnswer); // true

let userInput = "";
let submittedFlag = false;
console.log(userInput == submittedFlag); // true

let backendValue = null;
let frontendValue = undefined;
console.log(backendValue == frontendValue); // true

let deviceScore1 = 500;
let deviceScore2 = "500";
console.log(deviceScore1 == deviceScore2); // true

// Additional Questions (Loose Equality)
let looseA = 0;
let looseB = false;
console.log(looseA == looseB); // true

let looseX = "";
let looseY = false;
console.log(looseX == looseY); // true

let looseP = "0";
let looseQ = 0;
console.log(looseP == looseQ); // true

let looseM = [];
let looseN = 0;
console.log(looseM == looseN); // true

let looseVal1 = [];
let looseVal2 = false;
console.log(looseVal1 == looseVal2); // true


// 2. Loose Inequality !=
let code1 = "SAVE10";
let code2 = "SAVE20";
console.log(code1 != code2); // true

let userRole = "admin";
let defaultRole = "guest";
console.log(userRole != defaultRole); // true

let correctAnswer = 42;
let studentAnswer = "40";
console.log(correctAnswer != studentAnswer); // true

let emailInput = "";
let emptyFlag = false;
console.log(emailInput != emptyFlag); // false

let userId = null;
let validId = 101;
console.log(userId != validId); // true

// Additional Questions (Loose Inequality)
let ineqA = 0;
let ineqB = false;
console.log(ineqA != ineqB); // false

let ineqX = "";
let ineqY = false;
console.log(ineqX != ineqY); // false

let ineqP = "0";
let ineqQ = 0;
console.log(ineqP != ineqQ); // false

let ineqM = null;
let ineqN = undefined;
console.log(ineqM != ineqN); // false

let ineqVal1 = [];
let ineqVal2 = 0;
console.log(ineqVal1 != ineqVal2); // false


// 3. Strict Equality ===
let passwordNum = 1234;
let passwordStr = "1234";
console.log(passwordNum === passwordStr); // false

let accNum1 = 1234567890;
let accNum2 = 1234567890;
console.log(accNum1 === accNum2); // true

let featureFlag = true;
let requiredState = 1;
console.log(featureFlag === requiredState); // false

let dbValue = null;
let cacheValue = undefined;
console.log(dbValue === cacheValue); // false

let player1Score = 85;
let player2Score = 85;
console.log(player1Score === player2Score); // true

// Additional Questions (Strict Equality)
let strictA = 0;
let strictB = false;
console.log(strictA === strictB); // false

let strictX = "";
let strictY = false;
console.log(strictX === strictY); // false

let strictP = "0";
let strictQ = 0;
console.log(strictP === strictQ); // false

let strictM = null;
let strictN = undefined;
console.log(strictM === strictN); // false

let strictVal = NaN;
console.log(strictVal === strictVal); // false


// 4. Strict Inequality !==
let strId = "101";
let numId = 101;
console.log(strId !== numId); // true

let boolStatus = true;
let numStatus = 1;
console.log(boolStatus !== numStatus); // true

let userPass1 = "abc123";
let userPass2 = "abc124";
console.log(userPass1 !== userPass2); // true

let serverData = null;
let localData = undefined;
console.log(serverData !== localData); // true

let pId1 = 10;
let pId2 = 20;
console.log(pId1 !== pId2); // true

// Additional Questions (Strict Inequality)
let strictIneqA = 0;
let strictIneqB = false;
console.log(strictIneqA !== strictIneqB); // true

let strictIneqX = "";
let strictIneqY = false;
console.log(strictIneqX !== strictIneqY); // true

let strictIneqP = "0";
let strictIneqQ = 0;
console.log(strictIneqP !== strictIneqQ); // true

let strictIneqM = null;
let strictIneqN = undefined;
console.log(strictIneqM !== strictIneqN); // true

let strictIneqVal = NaN;
console.log(strictIneqVal !== strictIneqVal); // true


// 5. Greater Than >
let voterAge = 20;
let votingLimit = 18;
console.log(voterAge > votingLimit); // true

let cartTotal = 650;
let freeShippingLimit = 500;
console.log(cartTotal > freeShippingLimit); // true

let scoreCurrent = 1200;
let requiredScore = 1000;
console.log(scoreCurrent > requiredScore); // true

let monthlyIncome = 40000;
let minIncomeRequired = 30000;
console.log(monthlyIncome > minIncomeRequired); // true

let stepsCount = 11000;
let stepsTarget = 10000;
console.log(stepsCount > stepsTarget); // true

// Additional Questions (Greater Than)
let gtA = 5;
let gtB = 5;
console.log(gtA > gtB); // false

let gtX = "10";
let gtY = "2";
console.log(gtX > gtY); // false

let gtP = "5";
let gtQ = 10;
console.log(gtP > gtQ); // false

let gtM = null;
let gtN = 0;
console.log(gtM > gtN); // false

let gtVal = undefined;
console.log(gtVal > 0); // false


// 6. Less Than <
let studentMarksObtained = 30;
let failThreshold = 35;
console.log(studentMarksObtained < failThreshold); // true

let totalExpenses = 8000;
let monthlyBudget = 10000;
console.log(totalExpenses < monthlyBudget); // true

let stockItems = 7;
let lowStockLimit = 10;
console.log(stockItems < lowStockLimit); // true

let vehicleSpeed = 40;
let minSpeedLimit = 50;
console.log(vehicleSpeed < minSpeedLimit); // true

let remainingMinutes = 4;
let warningLimitMinutes = 5;
console.log(remainingMinutes < warningLimitMinutes); // true

// Additional Questions (Less Than)
let ltA = 5;
let ltB = 5;
console.log(ltA < ltB); // false

let ltX = "10";
let ltY = "2";
console.log(ltX < ltY); // true

let ltP = null;
let ltQ = 1;
console.log(ltP < ltQ); // true

let ltM = null;
let ltN = 0;
console.log(ltM < ltN); // false

let ltVal = undefined;
console.log(ltVal < 0); // false


// 7. Greater Than or Equal >=
let citizenAge = 18;
let minVotingAge = 18;
console.log(citizenAge >= minVotingAge); // true

let testPercentage = 75;
let minScholarshipPercent = 75;
console.log(testPercentage >= minScholarshipPercent); // true

let subscriberAge = 14;
let minSubscriptionAge = 13;
console.log(subscriberAge >= minSubscriptionAge); // true

let currentLevelScore = 500;
let minPassScore = 500;
console.log(currentLevelScore >= minPassScore); // true

let experienceYears = 3;
let requiredExperience = 2;
console.log(experienceYears >= requiredExperience); // true

// Additional Questions (Greater Than or Equal)
let gteA = 5;
let gteB = 5;
console.log(gteA >= gteB); // true

let gteX = null;
let gteY = 0;
console.log(gteX >= gteY); // true

let gteP = undefined;
let gteQ = 0;
console.log(gteP >= gteQ); // false

let gteM = "5";
let gteN = 5;
console.log(gteM >= gteN); // true

let gteVal = "10";
let gteLimit = 5;
console.log(gteVal >= gteLimit); // true


// 8. Less Than or Equal <=
let liftPassengers = 7;
let maxLiftCapacity = 8;
console.log(liftPassengers <= maxLiftCapacity); // true

let fileSizeMB = 5;
let maxUploadMB = 5;
console.log(fileSizeMB <= maxUploadMB); // true

let participantAge = 12;
let maxJuniorAge = 12;
console.log(participantAge <= maxJuniorAge); // true

let usedDataGB = 9.5;
let dataLimitGB = 10;
console.log(usedDataGB <= dataLimitGB); // true

let currentClassStrength = 40;
let maxClassCapacity = 40;
console.log(currentClassStrength <= maxClassCapacity); // true

// Additional Questions (Less Than or Equal)
let lteA = 5;
let lteB = 5;
console.log(lteA <= lteB); // true

let lteX = null;
let lteY = 0;
console.log(lteX <= lteY); // true

let lteP = undefined;
let lteQ = 0;
console.log(lteP <= lteQ); // false

let lteM = "5";
let lteN = 5;
console.log(lteM <= lteN); // true

let lteVal = "3";
let lteLimit = 5;
console.log(lteVal <= lteLimit); // true


// Part D: Logical Operators

// 1. Logical AND &&
let adminUsername = "admin";
let adminPassword = 1234;
console.log(adminUsername === "admin" && adminPassword === 1234); // true

let isLoggedIn = true;
let hasPermission = true;
console.log(isLoggedIn && hasPermission); // true

let inStock = true;
let itemPrice = 800;
console.log(inStock && itemPrice < 1000); // true

let studentMarks = 75;
let studentAttendance = 80;
console.log(studentMarks > 65 && studentAttendance > 70); // true

let isWeekend = true;
let isHoliday = false;
console.log(isWeekend && isHoliday); // false

// Additional Questions (Logical AND)
let andA = 0;
let andB = 10;
let resultAnd1 = andA && andB;
console.log(resultAnd1); // 0

let andX = 5;
let andY = 10;
let resultAnd2 = (andX > 3 && andY) || 0;
console.log(resultAnd2); // 10

let andP = "Hello";
let andQ = "";
let andR = "World";
let resultAnd3 = andP && andQ && andR;
console.log(resultAnd3); // ""

let valAnd = 5;
let conditionAnd = valAnd && (valAnd = 0);
console.log(conditionAnd); // 0
console.log(valAnd); // 0

let andX2 = 10;
let andY2 = 20;
let resultAnd4 = (andX2 && andY2) && (andX2 > andY2);
console.log(resultAnd4); // false


// 2. Logical OR ||
let passwordCorrect = true;
let otpValid = false;
console.log(passwordCorrect || otpValid); // true

let isMember = false;
let hasCoupon = true;
console.log(isMember || hasCoupon); // true

let userAgeVal = 16;
let userHeightVal = 155;
console.log(userAgeVal > 18 || userHeightVal > 150); // true

let emailGiven = true;
let phoneGiven = false;
console.log(emailGiven || phoneGiven); // true

let currentScoreVal = 900;
let timeBonus = true;
console.log(currentScoreVal > 1000 || timeBonus); // true

// Additional Questions (Logical OR)
let orA = 0;
let orB = false;
let orC = "";
let orD = null;
let orE = 42;
let resultOr1 = orA || orB || orC || orD || orE;
console.log(resultOr1); // 42

let orX = "Hello" || 0;
let orY = 0 || "Hi";
console.log(orX, orY); // "Hello" "Hi"

let orA2 = 10;
let orB2 = 20;
let resultOr2 = (orA2 < 5) || (orB2 > 15);
console.log(resultOr2); // true

let valOr = 5;
let conditionOr = valOr || (valOr = 0);
console.log(conditionOr); // 5
console.log(valOr); // 5

let resultOr3 = "" || 0 || false || null || undefined || "OK";
console.log(resultOr3); // "OK"