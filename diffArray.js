// Function diffArray compares two arrays
// Result is an array
// Items only found in one of two given arrays will be in result set

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  
  var foundAMatch = false;
  
  for(var i = 0; i < arr1.length; i++){
    for(var j = 0; j < arr2.length; j++){
      if(arr1[i] === arr2[j]){
        // We found a match between arrays
        foundAMatch = true;
      }
    }
    
    if(foundAMatch === false){
      // Add the unmatched entry to the newArr array
      newArr.push(arr1[i]);
    } else {
      foundAMatch = false; // Reset flag
    }
  }
  
  for(var k = 0; k < arr2.length; k++){
    for(var m = 0; m < arr1.length; m++){
      if(arr2[k] === arr1[m]){
        foundAMatch = true;
      }
    }
    
    if(foundAMatch === false){
      newArr.push(arr2[k]);
    } else {
      foundAMatch = false;
    }
  }
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// I'm sure there is a muuuch more elegant way of doing this
// (But apparently, this works too)
