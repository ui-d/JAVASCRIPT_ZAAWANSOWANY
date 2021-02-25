class Animal {}

class Quokka extends Animal {}

new Quokka();

Object.getPrototypeOf(Quokka) === Animal; /*?*/
Object.getPrototypeOf(Quokka.prototype) === Animal.prototype; /*?*/
