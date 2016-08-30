// Function destroyer checks an array (first argument passed in) against 1 or more optional arguments passed;
// any matching arguments found in the array are removed

function destroyer(arr) {
  // Remove all the values [that need to be destroyed]
  
  if (arr.length > 0){
    // Array is at least 1 item long; harvest information
    var checkedArray = [];
    var remainingArrayArgs = [];
    
    // Convert arguments list into an array (to properly check
    // first argument - an array)
    var prototypeArray = arr.slice.call(arguments);
    
    // Build out the array we will check
    // (and grab the remaining arguments - if any)
    for (var a = 0; a < prototypeArray.length; a++){
      if (a === 0){
        checkedArray = prototypeArray[a];
      } else {
        remainingArrayArgs.push(prototypeArray[a]);
      }
    }
    
    // Use the console.log commands below if you want
    // console.log(checkedArray);
    // console.log(remainingArrayArgs);
        
    var finalArray = [];
    var foundElementToDestroy = false;
    
    if (remainingArrayArgs.length > 0){
      // We have at least one argument; search array, removing elements that match argument(s)
      for (var i = 0; i < checkedArray.length; i++){
        for (var j = 0; j < remainingArrayArgs.length; j++){
          if(checkedArray[i] == remainingArrayArgs[j]){
            foundElementToDestroy = true;
            break;
          }
        }
        
        if(foundElementToDestroy){
          // Ignore this element, reset boolean flag
          foundElementToDestroy = false;
        } else {
          // This is not an element to be destroyed; push onto final array
          finalArray.push(checkedArray[i]);
        }
      }
      
      // Done; return final array minus destroyed element(s)
      return finalArray;
    }
    
    // We're here because no arguments existed to remove from array; return array and exit function
    return checkedArray;
  }
  
  // We're here because the passed-in array is empty; return the empty array and exit the function
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
