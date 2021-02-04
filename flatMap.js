var arr = [1, 2, 3, 4, [5, 6, 7, [8]]];

let arr2 = arr.flatMap((x) => x); // flattens arr 1 level
let arr6 = arr.flatMap((x) => [x, x - 1]); // map method that flattens 1 level
let arr3 = arr.flat().flat(); // flattens arr 2 levels
let arr4 = arr.flat(2); // same thing
let arr5 = arr.flat(Infinity); // same thing, when you dont know the level of nesting

console.log(arr6);
