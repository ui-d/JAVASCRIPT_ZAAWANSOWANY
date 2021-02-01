// object.create create new object with new proto object
// new object has access to all props and methods from obj

let obj = {
  name: "Flamingo",
  age: 35,
  saveFlamingo() {
    console.log(this.name);
  },
};

let obj2 = Object.create(obj);
obj2.age; // 35
obj2.saveFlamingo(); // 'Flamingo'
/*?*/

obj2.hasOwnProperty("name"); // false
obj2.hasOwnProperty("age"); // false
obj.hasOwnProperty("age"); // true
