let obj = {
  name: "Flamingo",
  test() {
    console.log("Flamingo");
  },
};

let obj1 = {
  name: "David",
};

Object.freeze(obj);

Object.isFrozen(obj); /*?*/

let obj2 = Object.create(obj);

obj2.age = 35;

let obj3 = {
  color: "purple",
};

Object.getOwnPropertyNames(obj2); /*?*/ //age
Object.getOwnPropertyDescriptor(obj2, "age"); /*?*/ //returns object with writable, configurable, enumerable, value etc for given property

Object.getPrototypeOf(obj2); /*?*/ // returs obj

Object.is(obj.name, obj2.name); /*?*/ // true props are equal

Object.isExtensible(obj); /*?*/ // false when freezed

Object.keys(obj); /*?*/ // name, test

Object.values(obj); /*?*/ // Flamingo, ()=>{}

Object.preventExtensions(obj1);

obj1.age = 33; // not doing anything

Object.setPrototypeOf(obj2, obj3);

obj2.color; /*?*/ // return purple

Object.seal(obj);

obj.size = "Medium"; //does nothing - object is non-configurable

Object.isSealed(obj); /*?*/ // returns true
