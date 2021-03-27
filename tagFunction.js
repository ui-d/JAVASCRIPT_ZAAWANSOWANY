const name = 'Alfred';
const age = 47;
 
function greet(){
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}
greet`I'm ${name}. I'm ${age} years old.`;



const objects = [{ name: "Flamingo", age: 33}, {name: "Blackbird", age: 21}];

function returnArgs(str, arg1, arg2) {
    console.log(str + arg1 + arg2)
}


objects.map((el)=> {
    returnArgs`This is ${el.name} of age ${el.age}`
})
