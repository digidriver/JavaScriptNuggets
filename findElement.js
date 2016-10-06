// Function findElement
// Return first element in array that passes a truth test
// Array: first argument
// Truth test: second argument

function findElement(arr, func) {
  var result = 0;
  
  // Convert arguments list into array
  var prototypeArray = arr.slice.call(arguments);
  
  // Harvest array and remaining argument details
  var actualArray = arguments[0];
  var truthTest = arguments[1];
  
  // Use a filter to sweep array and find first truthy match
  result = actualArray.filter(willItTruthy, truthTest)[0];
  return result;
}

// Helper function
function willItTruthy(item){
  if (this(item) === false){
    return undefined;
  } else {
    return item;
  }
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

// ERRATA
//
// First argument must be an array
// Second argument must be a function
// Array/function arguments are not optional
