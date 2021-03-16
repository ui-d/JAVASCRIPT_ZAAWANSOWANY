let slugify = "Functional programming playground";

let slug = slugify.replaceAll(" ", "-").toLowerCase();
let slug2 = slugify
  .split(" ")
  .map((x) => x.toLowerCase())
  .join("-");

console.log(slug2);
