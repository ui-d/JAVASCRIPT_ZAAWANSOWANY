const { isArrayBindingPattern } = require("typescript");

let obj = {
  name: "Flamingo",
  other: {
    age: 35,
    height: 1.86,
  },
};

Object.freeze(obj);

delete obj.name; // does nothing
delete obj.other; // does nothing
delete obj.other.age; // age removed

obj;

console.log(obj);

let arr = [1, 2, 3, 4, [5, 6, 7]];

Object.freeze(arr);

arr.pop(); //does nothing

arr[4].push(21); // worked for nested arrays
