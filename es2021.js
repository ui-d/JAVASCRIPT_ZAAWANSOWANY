// replaceAll

const queryString = "q=query+string+parameters";
const withSpaces = queryString.replace("+", " ");
const withSpaces2 = queryString.replaceAll("+", " ");
console.log(withSpaces); /*?*/

// weakReference

const normalObj = { name: "John" };
const refObj = new WeakRef({ name: "John" });

const refObj = new WeakRef({ name: "John" });
const obj = refObj.deref();
console.log(obj.name); // John


// Logical Assignment Operator

let x = 10;
let y = 21;


y &&= x; // Equivalent: x && (x = y)

// Logical OR assignment


let w = undefined;
let z = 15;

w ||= z;  // Equivalent: x || (x = y)


