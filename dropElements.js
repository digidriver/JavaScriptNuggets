// Function dropElements
// Self-explanatory (and funny, too... see errata below)

function dropElements(arr, func) {
  // Drop them elements.
  
  var finalArray = [];
  var predicateReturnedTrue = false;
  
  // Convert arguments list into array
  var prototypeArray = arr.slice.call(arguments);
  
  // Harvest array and remaining argument details
  var actualArray = arguments[0];
  var testFn = arguments[1];
  
  for (var x = 0; x < actualArray.length; x++){
    if (predicateReturnedTrue){
      finalArray.push(actualArray[x]);
    } else {
      if (testFn(actualArray[x])){
        finalArray.push(actualArray[x]);
        predicateReturnedTrue = true;
      }
    }
  }
  
  return finalArray;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3; });

// ERRATA
//
// For whatever reason, slicing and shifting elements didn't work.
// Pushing valid elements onto a new array (and returning that) did.
//
// * Arguments are not optional
// * Array must have at least one argument
