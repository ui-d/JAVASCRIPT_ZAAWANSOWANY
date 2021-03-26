var name = 'Alfred';
var age = 47;
 
function greet(){
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}
greet`I'm ${name}. I'm ${age} years old.`;
