function flamingo(a, b, c) {
  console.log(this.age + a);
}

let obj1 = {
  age: "Flamingo ",
};

flamingo.prototype.color = "Purple";

flamingo.name; /*?*/ // flamingo
flamingo.toString(); /*?*/
flamingo.length; /*?*/ // returns number of arguments
flamingo.call(obj1, 35); /*?*/
