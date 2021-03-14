// foreach

if (!Array.prototype.newForEach) {
  Array.prototype.newForEach = function (clb) {
    for (let item of this) {
      clb(item);
    }
  };
}

const arr = [1, 2, 3];
const birds = ["Flamingo", "Bluebird"];

arr.newForEach((el) => {
  console.log(el);
});

// map

if (!Array.prototype.newMap) {
  Array.prototype.newMap = function (clb) {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
      newArr.push(clb(this[i], i, this));
    }

    return newArr;
  };
}

const newArr = birds.newMap((el, index, arr) => {
  return `${el} ${index} ${arr}`;
});

console.log(newArr);
