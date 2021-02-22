const value1 = 1;
const value2 = 23;
const value3 = null;
const value4 = undefined;

const result = value1 || value2;
const restult2 = value3 ?? value4;

// nullish assignment

let a = {
  age: null,
};

a.age ??= 18; // only assigns if a.age is nullish (null or undefined).

console.log(a.age);
