isFinite(0/0) ; // false 
isFinite("foo"); // false 
isFinite("10"); // true 
isFinite(10);   // true 
isFinite(undefined);  // false 
isFinite();   // false 
isFinite(null);  // true  !!! 
