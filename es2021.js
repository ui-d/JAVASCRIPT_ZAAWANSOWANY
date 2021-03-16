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
