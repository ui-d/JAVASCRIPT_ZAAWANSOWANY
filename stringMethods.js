// String.fromCharCode()
// String.fromCodePoint()
// String.prototype.charAt()
// String.prototype.charCodeAt()

let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJ";
let str2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

String.fromCharCode(33, 54, 57); /*?*/
String.fromCodePoint(9731, 9733, 9842, 0x2f804); /*?*/
str.charAt(3); /*?*/
str.charCodeAt(2); /*?*/

// String.prototype.concat()
// String.prototype.endsWith()
// String.prototype.indexOf()
// String.prototype.lastIndexOf()
// String.prototype.localeCompare()
// String.prototype.match()
// String.prototype.matchAll()

str.concat(str2); /*?*/
str2.endsWith("Z"); /*?*/
str2.indexOf("F"); /*?*/
str.lastIndexOf("G"); /*?*/
str.localeCompare("Abc"); /*?*/
