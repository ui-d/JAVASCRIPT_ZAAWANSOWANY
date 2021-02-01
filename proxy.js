// proxy

let obj = {
  name: "Flamingo",
};

let objProxy = new Proxy(obj, {});

objProxy.name; /*?*/ // Flamingo

// traps

// get

let obj2 = {
  name: "Dawid",
  age: 35,
};

let obj2Proxy = new Proxy(obj2, {
  get: (props, calledProp) => {
    console.log(calledProp); // age
  },
});

obj2Proxy.age;

// set

let obj3 = { color: "purple" };

let obj3Proxy = new Proxy(obj3, {
  set: (target, property, value, receiver) => {
    console.log(`color zemieniony na ${receiver}`);
  },
});

obj3Proxy.color = "violet";

// has

let obj4 = { size: "21" };

let obj4Proxy = new Proxy(obj4, {
  has: (target, prop) => {
    return prop in target;
  },
});

let isPropExisting = "size" in obj4; /*?*/

// deleteProperty

let obj5 = { height: 21, width: 111 };

let obj5Proxy = new Proxy(obj5, {
  deleteProperty: (target, prop) => {
    if (prop in target) {
      delete target[prop];
      console.log(`prop ${prop} is deleted`);
      console.log(target);
    }
  },
});

delete obj5Proxy.width;

// defineProperty

let obj6 = { test: 3 };

let obj6Proxy = new Proxy(obj6, {
  defineProperty: (target, prop, val) => {
    target[prop] = val;
    console.log(target);
  },
});

obj6Proxy["a"] = 3;
obj6;

//
