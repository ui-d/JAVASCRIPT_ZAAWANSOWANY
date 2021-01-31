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
    console.log(`color zemieniony na ${value}`);
  },
});

obj3Proxy.color = "violet";
