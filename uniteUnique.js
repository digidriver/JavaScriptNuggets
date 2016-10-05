// Function uniteUnique
// Searches through a collection of multiple arrays (passed as argument arr), returns new array of unique values
// New array is built in order of original provided arrays
// (All values, all arrays, in original order, no duplicates allowed in final array)

function uniteUnique(arr) {
  var result = [];
  
  // Obtain arrays from arr parameter
  var prototypeArray = arr.slice.call(arguments);
  var duplicateArray = [];
  var foundInDupArray = false;
  
  // Sweep through arrays and build result
  prototypeArray.forEach(function(array){
    // Sweep through each element of current array
    array.forEach(function(innerItem){
      // Is this the first element?
      if(duplicateArray.length === 0){
        result.push(innerItem);
        duplicateArray.push(innerItem);
      } else {
        // If it isn't first element, check through duplicate array to prevent duplicates in final result
        duplicateArray.forEach(function(element){
          if (element == innerItem){
            foundInDupArray = true;
          }
        });
        
        // Not a duplicate? Add it to the final array (and keep track of value in duplicate array)
        if (!foundInDupArray){
          result.push(innerItem);
          duplicateArray.push(innerItem);
        } else {
          // Reset your found duplicate flag
          foundInDupArray = false;
        }
      }
    });
  });
  
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
