let arr = [1, 2, 3, 4];

function removeElement(array, element) {
  return array.filter((el) => {
    return el !== element;
  });
}

let newArr = removeElement(arr, 2); /*?*/

let obj = {
  name: "Flamingo",
  age: 35,
  height: 120,
};

function removeObjectProp(someObject, prop) {
  const { [prop]: q, ...restofprops } = someObject;
  return restofprops;
}

let newObj = removeObjectProp(obj, "age"); /*?*/
