//check if browser tab is in focus

// let tabIsInFocus = () => document.hidden;

// tabIsInFocus();

// Truncate a number to a fixed decimal point

const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);

let number = 123453.4453456672345;

let newNumber = toFixed(number, 4); /*?*/
