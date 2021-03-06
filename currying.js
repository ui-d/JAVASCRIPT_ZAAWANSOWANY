let personsData = (name) => {
  return (age) => {
    return (height) => {
      return { name, age, height };
    };
  };
};

personsData("Flamingo")(53)(186); /*?*/

//===============================================

let a = personsData("Dawid");
let b = a(52);
let c = b(186);

c;
