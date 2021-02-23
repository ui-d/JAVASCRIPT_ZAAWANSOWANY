let foo = (age = 35) => {
  return `name equals ${age}`;
};

foo(); /*?*/

let bar = (nickname = name(), age) => {
  return `nickname equals ${nickname}`;
};

let name = () => {
  throw new Error("Name parameter is required");
};

bar("Flamingo"); /*?*/
bar();
