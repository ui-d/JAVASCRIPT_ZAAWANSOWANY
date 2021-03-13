let fetch = require("node-fetch");

let newPromise = new Promise((resolve, reject) => {
  resolve("Flamingo");
});

let a = newPromise
  .then((name) => {
    return name;
  })
  .then((name) => {
    return name.toUpperCase();
  });

a; /*?*/

//================================================================

function returnPromise() {
  return new Promise((resolve, reject) => {
    resolve({ name: "Flamingo", age: 35 });
  });
}

let propsArray = returnPromise().then(({ name, age }) => {
  return [name, age];
});

propsArray.then(([name, age]) => {
  console.log(name);
});

//================================================================

function rejectPromise() {
  return new Promise((resolve, reject) => {
    reject("new error");
  });
}

rejectPromise().catch((err) => {
  err;
});

// chained promise

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

// myPromise
//   .then(handleResolvedA, handleRejectedA)
//   .then(handleResolvedB, handleRejectedB)
//   .then(handleResolvedC, handleRejectedC);

// any, race, all

let f1 = fetch("https://reqres.in/api/users?page=1");
let f1 = fetch("https://reqres.in/api/users?page=2");

// let [page1, page2] = await Promise.race([f1, f2]);

Promise.all([f1, f2]).then(([page1, page2]) =>
  console.log(page1 + " " + page2)
);
