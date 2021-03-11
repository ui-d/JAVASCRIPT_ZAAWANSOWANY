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
