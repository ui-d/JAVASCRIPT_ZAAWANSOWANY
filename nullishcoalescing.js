const value1 = 1;
const value2 = 23;
const value3 = null;
const value4 = undefined;

const result = value1 || value2;
const restult2 = value3 ?? value4;

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

console.log(area); // 5000

// nullish assignment

let a = {
  age: null,
};

a.age ??= 18; // only assigns if a.age is nullish (null or undefined).

console.log(a.age);
