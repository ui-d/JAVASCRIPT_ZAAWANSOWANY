let arr = [1, 2, 3, 4, 5];

arr.unshift(6); /*?*/
arr.shift(); /*?*/
arr.pop(); /*?*/
arr.push(7); /*?*/

arr.indexOf(4); /*?*/

let newArr = arr.slice(0, 3); /*?*/
arr.splice(0, 1); //change oryginal arr

arr.length;

let obj = 33;

let arr1 = Array.from(obj); /*?*/

// create array

let set = new Set([1, 2, 3, 4, 5, 5]);

let arrFromSet = Array.from(set); /*?*/

let map = new Map([
  [1, 2],
  [3, 4],
]); /*?*/

let arrFromMap = Array.from(map); /*?*/

Array.isArray(arrFromMap); /*?*/

Array.of(1, 2, 3, "Flamingo", true); /*?*/ // creates arr with all elements
