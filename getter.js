const obj = {
  log: ["a", "b", "c"],
  get latest() {
    if (this.log.length === 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  },
};

obj.latest; /*?*/

const obj2 = {
  name: "Flamingo",
  age: 35,
  height: 186,
  get getAge() {
    return this.age;
  },
};

obj2.getAge; /*?*/
