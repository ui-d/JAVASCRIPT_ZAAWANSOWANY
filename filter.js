let array = [12, 5, 8, 130, 44, 3, 333];
let stringArray = ["Flamingo", "bird", "ui developer"];

let isBigEnough = (value) => {
  return value >= 10;
};

let isNotEven = (value) => {
  return value % 2;
};

let isDivisableByThree = (value) => {
  return !(value % 3);
};

let hasFourChars = (value) => {
  return value.length === 4;
};

array.filter(isBigEnough); /*?*/

array.filter(isNotEven); /*?*/

array.filter(isDivisableByThree); /*?*/

stringArray.filter(hasFourChars); /*?*/
