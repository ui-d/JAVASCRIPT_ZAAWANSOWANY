let error_one = new Error("this is an error"); /*?*/

let error_two = Error("this is an error"); /*?*/

try {
  throw error_one;
} catch (e) {
  console.log(e.name, e.message);
}

try {
  throw Error("this is new error");
} catch (e) {
  console.log(e.message);
}
