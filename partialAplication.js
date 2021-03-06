function foo(a, b, c) {
  return a + b + c;
}

foo(1, 2, 3); /*?*/

function bar(a) {
  return function baz(b, c) {
    return a + b + c;
  };
}

bar(1)(2, 3); /*?*/

let a = bar(22);

a(3, 4); /*?*/
a(44, 5); /*?*/
a(1, 2); /*?*/
