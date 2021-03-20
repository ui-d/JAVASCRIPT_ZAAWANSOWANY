function sum() {
  switch (arguments.length) {
  case 0:
      console.log('You have 0 arguments');
      break;
  case 1:
      console.log('Pass at least two arguments');
      break;
  default:
      let result = 0;
      let length = arguments.length;
  
      for (i = 0; i < length; i++) {  
          result = result + arguments[i];  
      }  
      console.log(result);
      break;
  }
}

sum();
sum(5); 
sum(5, 9);    
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);


function concatStrings(a, b) {
  switch(typeof a) {
    case 'string':
      return a + b;
      break;
    case 'number':
      return a.toString() + b;
      break;
    default:
      return "sth else"
  }
}


concatStrings(3, 33); /*?*/
