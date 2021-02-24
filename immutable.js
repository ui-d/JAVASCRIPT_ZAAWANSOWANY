let arr = [1, 2, 3, 4];

function removeElement(array, element) {
  return array.filter((el) => {
    return el !== element;
  });
}

let newArr = removeElement(arr, 2); /*?*/
