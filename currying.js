let personsData = (name) => {
  return (age) => {
    return (height) => {
      return { name, age, height };
    };
  };
};

personsData("Flamingo")(53)(186); /*?*/
