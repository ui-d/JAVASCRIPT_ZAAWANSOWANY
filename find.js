let arr = [1, 2, 3, 4];
let stringArray = ["Flamingo", "bird", "ui dev"];

let findings = arr.find((x) => x > 3);
let findings2 = stringArray.find((x) => x === "bird"); // returns exact elment, when filter returns reduced array of elements
