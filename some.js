let arr = [1, 2, 3, 4];

let higherThanThree = arr.some((el, i, arr) => {
  return el > 3;
});

higherThanThree;
