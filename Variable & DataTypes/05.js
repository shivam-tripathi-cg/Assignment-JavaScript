let student = {
  name: "John",
  age: 17,
  isEnrolled: true
};

console.log(student);
console.log(student.name);
console.log(student.age);

let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);
console.log(mixed);

// Keeping arrays with a single data type ensures consistency, makes the code easier to read, and prevents unexpected errors when processing elements.

function greet(name) {
  return "Hello, " + name + "!";
}

let message1 = greet("Alice");
let message2 = greet("Bob");

console.log(message1);
console.log(message2);