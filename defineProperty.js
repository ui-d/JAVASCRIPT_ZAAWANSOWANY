// OBJECT.DEFINEPROPERTY basics

let obj = {};

Object.defineProperty(obj, "nameOfProp", {
  value: 21,
});

obj.nameOfProp; // 21

// get/set

let obj2 = { name: "Flamingo" };

Object.defineProperty(obj2, "test", {
  get() {
    console.log(`${this.name}`); /*?*/ // run when get
  },
  set() {
    console.log(`${this.name}`); // run when set
  },
});

obj2.test = 33;

// all descriptor values

let obj3 = { age: 35 };

Object.defineProperty(obj3, "Dev", {
  value: "male",
  writable: true, //if false, the property is read only;
  configurable: true, //if false, the property can't be deleted;
  enumerable: true, //if true, it will be iterated in for(var i in theObject); if false, it will not be iterated, but it is still accessible as public
});
