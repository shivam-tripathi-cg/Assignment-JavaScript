// question 1
var city = "Surat";
function display() {
    var country = "India";
    console.log(city);
    console.log(country);
}
display();
// - Which variable is declared in the global scope? -> city
// - Which variable is declared inside the function? -> country
// - Can both variables be accessed inside "display()"? -> Yes, because city is global and country is local to the function.

// question 2
var price = 500;
function calculate() {
    var tax = 50;
    console.log(price + tax);
}
calculate();
console.log(price);
// Output:
// 550
// 500

// question 3
var college = "ABC College";
function student() {
    var name = "Rahul";
    var age = 20;
}
function teacher() {
    var subject = "JavaScript";
}
// Classification:
// - college: Global
// - name: Function-scoped (inside student)
// - age: Function-scoped (inside student)
// - subject: Function-scoped (inside teacher)

// question 4
function first() {
    var number = 100;
}
function second() {
    console.log(number);
}
first();
second();
// Explanation: It will throw a ReferenceError because "number" is scoped locally to the "first" function and is not accessible inside the "second" function or the global scope.

// question 5
var globalVar = "I am global";
function testFunc() {
    var localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}
testFunc();
console.log(globalVar);

// question 6
var game = "Cricket";
function play() {
    console.log("I like " + game);
}
play();
console.log(game);
// Output:
// I like Cricket
// Cricket

// question 7
var language = "English";
function showLanguage() {
    console.log(language);
}
function changeLanguage() {
    language = "Gujarati";
}
showLanguage();
changeLanguage();
showLanguage();
console.log(language);
// Output:
// English
// Gujarati
// Gujarati
// Explanation: changeLanguage modifies the global variable "language", so subsequent reads reflect the updated value.

// question 8
function displayMarks() {
    console.log(marks);
}
var marks = 75;
displayMarks();
// Output:
// 75
// Explanation: No error is produced because "var marks" is hoisted to the top of the scope, making "marks" available (as undefined initially, but by the time displayMarks() is invoked after the assignment, it is 75).

// question 9
var color = "Red";
function showColor() {
    var message = "Favorite color: ";
    console.log(message + color);
}
showColor();
console.log(color);
console.log(message);
// Explanation: console.log(message) causes a ReferenceError because "message" is function-scoped to showColor and not accessible globally.

// question 10
var school = "Sunrise School";
function showSchool() {
    console.log(school);
}
function updateSchool() {
    school = "Green Valley School";
}
showSchool();
updateSchool();
showSchool();
console.log(school);

// question 11
function calculateTotal() {
    var first = 100;
    var second = 200;
    console.log(first + second);
}
calculateTotal();
console.log(first);
// Explanation: The last statement throws a ReferenceError because "first" is a local variable inside calculateTotal and cannot be accessed outside.

// question 12
function employee() {
    var salary = 30000;
}
employee();
console.log(salary);
// Explanation: Throws a ReferenceError because "salary" is declared with "var" inside the function, making it function-scoped.

// question 13
var number = 15;
function test() {
    var number = 25;
    console.log(number);
}
test();
console.log(number);
// Explanation: The local variable "number" inside test shadows the global variable "number". Modifying or declaring it locally does not affect the global variable.

// question 14
function calculate() {
    var result = 40;
    result = result + 10;
    console.log(result);
}
calculate();
calculate();
// - What is the output? 50 followed by 50
// - Is a new local variable created each time the function is called? Yes
// - Does the local variable remain accessible after the function finishes executing? No

// question 15
function calculateArea() {
    var length = 8;
    var width = 4;
    var area = length * width;
    console.log(area);
}
calculateArea();

// question 16
if (10 > 5) {
    var result = "Success";
}
console.log(result);
// Output: Success
// Explanation: "var" does not have block scope; it is function-scoped or globally-scoped, so variables declared inside an "if" block leak outside of it.

// question 17
var number = 1;
if (true) {
    var number = 2;
}
console.log(number);
// Output: 2
// Explanation: Because "var" does not have block scope, re-declaring "number" inside the block overwrites the outer/global variable.

// question 18
var message = "Start";
{
    var message = "End";
}
console.log(message);
// Output: End
// Explanation: Standalone blocks do not create a separate scope for "var" declarations.

// question 19
if (false) {
    var result = 100;
}
console.log(result);
// Output: undefined
// Explanation: Even though the condition is false, the variable declaration using "var" is hoisted to the top of the scope, but the assignment is not executed.

// question 20
if (true) {
    let secret = "Hidden";
    console.log(secret);
}
// Explanation: Using "let" provides block scope, ensuring that "secret" is confined strictly inside the "if" block and cannot be accessed externally.

// question 21
for (var number = 2; number <= 6; number += 2) {
    console.log(number);
}
console.log("Final:", number);
// Output:
// 2
// 4
// 6
// Final: 8
// Explanation: "var" lacks block scope, so the loop variable "number" remains accessible outside the loop.

// question 22
var count = 10;
for (var count = 1; count <= 3; count++) {
    console.log(count);
}
console.log("Count:", count);
// Output:
// 1
// 2
// 3
// Count: 4
// Explanation: The original global variable "count" is re-declared and overwritten by the loop variable because "var" is function/globally scoped.

// question 23
var i = 5;
while (i > 2) {
    console.log(i);
    i--;
}
console.log("After loop:", i);
// Output:
// 5
// 4
// 3
// After loop: 2
// Explanation: "i" is accessible because it was declared with "var" in the outer scope.

// question 24
for (var item = 1; item <= 3; item++) {
    console.log("Item:", item);
}
console.log("Last item:", item);
// Output:
// Item: 1
// Item: 2
// Item: 3
// Last item: 4
// Explanation: Does not cause an error; "item" contains 4 after the loop terminates.

// question 25
for (let step = 1; step <= 4; step++) {
    console.log(step);
}
// Explanation: Using "let" instead of "var" gives the variable block scope, making it inaccessible outside the loop.

// question 26
function calculate() {
    for (var number = 1; number <= 3; number++) {
        console.log(number * 10);
    }
    console.log("Final:", number);
}
calculate();
// Output:
// 10
// 20
// 30
// Final: 4
// Explanation: "number" is accessible after the loop because "var" is function-scoped, but it cannot be accessed outside the function "calculate".

// question 27
function student() {
    for (var marks = 60; marks <= 80; marks += 10) {
        console.log(marks);
    }
    console.log(marks);
}
student();
// Explanation: The first console.log inside the loop works. The console.log inside the function after the loop works (prints 90). Accessing "marks" outside the function would cause a ReferenceError.

// question 28
function test() {
    var value = 5;
    while (value < 8) {
        console.log(value);
        value++;
    }
    console.log("Final value:", value);
}
test();
// Output:
// 5
// 6
// 7
// Final value: 8
// Explanation: The loop executes 3 times.

// question 29
function calculate() {
    for (var i = 1; i <= 2; i++) {
        console.log(i);
    }
}
calculate();
// Explanation: Placing console.log(i) after calculate() outside would cause a ReferenceError because "i" is scoped to the calculate function.

// question 30
function printNumbers() {
    for (var varNum = 1; varNum <= 5; varNum++) {
        console.log(varNum);
    }
    console.log("Inside function after loop:", varNum);
}
printNumbers();
// console.log(varNum); // ReferenceError: varNum is not defined outside the function

// question 31
console.log(score);
var score = 90;
console.log(score);
// Output:
// undefined
// 90
// Explanation: Variable declarations using "var" are hoisted to the top of their scope with an initial value of "undefined".

// question 32
var a = 10;
function test() {
    console.log(a);
    var a = 20;
    console.log(a);
}
test();
// Output:
// undefined
// 20
// Explanation: The local variable "a" is hoisted inside the function scope, shadowing the global "a" and making its value "undefined" at the first log.

// question 33
console.log(first);
console.log(second);
var first = 100;
var second = 200;
console.log(first);
console.log(second);
// Explanation: Both initial console.log statements output "undefined" because "var" declarations are hoisted to the top.

// question 34
function calculate() {
    console.log(total);
    var total = 50;
    console.log(total);
}
calculate();
// Hoisted representation:
// function calculate() {
//     var total;
//     console.log(total);
//     total = 50;
//     console.log(total);
// }

// question 35
var price = 100;
function showPrice() {
    console.log(price);
    var price = 500;
}
showPrice();
console.log(price);
// - What does the first console.log inside the function print? undefined
// - What does the final console.log print? 100
// - How does hoisting affect the local variable price? It hoists the declaration "var price" to the top of the function, shadowing the global variable.

// question 36
sayHello();
function sayHello() {
    console.log("Hello from CodingGita");
}
// Output: Hello from CodingGita
// Explanation: Function declarations are fully hoisted (both name and function body), allowing them to be called before they appear in the code.

// question 37
display();
function display() {
    console.log("Function is hoisted completely");
}
// Output: Function is hoisted completely
// Explanation: Unlike "var" variables which are hoisted with "undefined", function declarations are hoisted with their complete implementation.

// question 38
// greet(); // TypeError: greet is not a function
var greet = function() {
    console.log("Hi");
};
// Explanation: Function expressions assigned to a "var" variable only hoist the variable declaration (as undefined), not the function assignment itself.

// question 39
console.log(typeof myFunc);
function myFunc() {
    return "I am hoisted";
}
console.log(myFunc());
// Output:
// function
// I am hoisted

// question 40
var globalMsg = "Global Message";
callBefore();
function callBefore() {
    console.log(globalMsg);
}

// question 41
var institute = "CodingGita";
function department() {
    var dept = "CSE";
    function batch() {
        var year = 2025;
        console.log(year);
        console.log(dept);
        console.log(institute);
    }
    batch();
}
department();
// Output:
// 2025
// CSE
// CodingGita
// Explanation: JavaScript uses the scope chain to look up variables from the current scope outward to parent and global scopes.

// question 42
var globalVar = "I am global";
function outer() {
    var outerVar = "I am outer";
    function inner() {
        console.log(globalVar);
        console.log(outerVar);
        // console.log(innerVar); // ReferenceError if innerVar is not declared
    }
    inner();
}
outer();

// question 43
var a = 1;
function level1() {
    var b = 2;
    function level2() {
        var c = 3;
        function deep() {
            console.log(a, b, c);
        }
        deep();
    }
    level2();
}
level1();
// Explanation: a, b, and c are all accessible inside deep() via the scope chain.

// question 44
var x = "global";
function first() {
    var x = "first";
    function second() {
        console.log(x);
    }
    second();
}
first();
console.log(x);
// Output:
// first
// global

// question 45
var globalVal = "Global";
function levelOuter() {
    var outerVal = "Outer";
    function levelMiddle() {
        var midVal = "Middle";
        function levelInner() {
            var innerVal = "Inner";
            console.log(innerVal, midVal, outerVal, globalVal);
        }
        levelInner();
    }
    levelMiddle();
}
levelOuter();

// question 46
var score = 50;
function test() {
    var score = 90;
    console.log(score);
}
test();
console.log(score);
// Output:
// 90
// 50
// Explanation: Shadowing occurs when a local variable shares the same name as a variable in an outer scope, temporarily masking the outer variable within the inner scope.

// question 47
var name = "Global Name";
function show() {
    var name = "Local Name";
    console.log(name);
}
show();
console.log(name);
// Output:
// Local Name
// Global Name
// Explanation: The local variable does not permanently change the global one because it only exists within the local scope.

// question 48
var value = 10;
function update() {
    value = 20;
    console.log(value);
}
update();
console.log(value);
// Output:
// 20
// 20
// Explanation: Without "var", the assignment updates the existing global variable rather than creating a new local shadowed variable.

// question 49
var color = "Blue";
function changeColor() {
    var color = "Red";
    console.log("Inside:", color);
}
changeColor();
console.log("Outside:", color);
// Output:
// Inside: Red
// Outside: Blue

// question 50
var marks = 70;
function checkMarks() {
    var marks = 95;
    console.log("Inside function marks:", marks);
}
checkMarks();
console.log("Outside function marks:", marks);

// question 51
function outer() {
    var teacher = "Kartik Sir";
    function inner() {
        var student = "Jenil";
        console.log(student);
        console.log(teacher);
    }
    inner();
}
outer();
// Explanation: Neither teacher nor student can be accessed outside outer() because they are scoped within outer() and inner() respectively.

// question 52
function parent() {
    var a = "Parent";
    function child() {
        var b = "Child";
        function grandchild() {
            var c = "Grandchild";
            console.log(a);
            console.log(b);
            console.log(c);
        }
        grandchild();
    }
    child();
}
parent();
// Output: Parent, Child, Grandchild

// question 53
function outer() {
    var secret = "Hidden";
    function inner() {
        console.log(secret);
    }
}
// inner(); outer();
// Explanation: inner() cannot be called outside outer() because inner is scoped inside outer.

// question 54
function createMessage() {
    var greeting = "Hello";
    function show() {
        console.log(greeting + " students");
    }
    return show;
}
var messageFunc = createMessage();
messageFunc();
// Output: Hello students
// Explanation: This demonstrates a closure; the inner function retains access to the outer function's variables even after the outer function has finished executing.

// question 55
function studentInfo() {
    var name = "Aman";
    var course = "Backend";
    function display() {
        console.log(name, course);
    }
    display();
}
studentInfo();

// question 56
function test() {
    x = 100;
}
test();
console.log(x);
// Explanation: Omitting "var" (or let/const) implicitly creates a global variable (in non-strict mode), which can lead to accidental global namespace pollution.

// question 57
if (true) {
    var x = 20;
}
console.log(x);
// Output: 20
// Explanation: Beginners expect an error assuming block scope, but "var" does not have block scope.

// question 58
console.log(a);
var a = 10;
// Output: undefined
// Explanation: Hoisting lifts the "var a" declaration to the top, so there is no ReferenceError, but its value is "undefined" at the time of logging.

// question 59
var x = 10;
var x = 20;
console.log(x);
// Output: 20
// Explanation: "var" allows redeclaration of the same variable name within the same scope without throwing an error, which can cause bugs and confusion.

// question 60
function calculate() {
    let total = 0;
    for (let i = 1; i <= 5; i++) {
        total = total + i;
    }
    console.log(total);
}
calculate();