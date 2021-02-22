let arr = [1, 2, 3, 4];

let iterator = arr[Symbol.iterator](); /*?*/

iterator.next(); /*?*/
iterator.next(); /*?*/
iterator.next().value; /*?*/
iterator.next(); /*?*/
iterator.next(); /*?*/
iterator.next(); /*?*/
iterator.next(); /*?*/

let str = "Flamingo";

let stringIterator = str[Symbol.iterator](); /*?*/

stringIterator.next(); /*?*/
stringIterator.next(); /*?*/
stringIterator.next().done; /*?*/

let set = new Set(arr);

let objIterator = set[Symbol.iterator](); /*?*/

objIterator.next(); /*?*/
