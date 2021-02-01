// object.assign assigns all props from object to new object

let obj = { name: "Flamingo" };

let obj2 = { height: 2 };

let obj3 = { height: 3 };

let obj4 = Object.assign(obj, obj2);

let obj5 = Object.assign(obj, obj2, obj3, {
  weight: 30,
});

obj5; /*?*/
