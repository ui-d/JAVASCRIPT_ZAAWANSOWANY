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
let z = 21;

w ||= z;  // Equivalent: x || (x = y)


// Logical Nullish assignment (??=)

let a = null; // same with undefined
let b = 21;

a ??= b;
// Equivalent: x ?? (x = y)

// Numeric Separators

let bigNumber = 1_000_000;
let bigFloat = 1_000_000.210_211;


// Language specific list formatting

const list = ['Flamingo', 'Blackbird', 'Snowdrop'];

// English
 console.log(new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(list));
//  Flamingo, Blackbird and Snowdrop

 console.log(new Intl.ListFormat('en', { style: 'short', type: 'disjunction' }).format(list));
//  Flamingo, Blackbird or Snowdrop

// Dutch
 console.log(new Intl.ListFormat('nl', { style: 'long', type: 'conjunction' }).format(list));
//  Flamingo, Blackbird en Snowdrop

// German
console.log(new Intl.ListFormat('de', { style: 'long', type: 'conjunction' }).format(list));
// Flamingo, Blackbird und Snowdrop

// Polish
console.log(new Intl.ListFormat('pl', { style: 'long', type: 'conjunction' }).format(list));
// Flamingo, Blackbird i Snowdrop
