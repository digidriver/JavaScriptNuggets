// Function sym
// Return the symmetric difference of two or more arrays

function sym(args) {
  // Convert arguments list into a proper array
  var arrayList = args.slice.call(arguments);
  var symmetricResult = [];
  
  // Iterate through array of arrays
  // If checking the symmetric difference of more than 2 arrays,
  // difference of third array = symmetric diff of first 2
  // (4th array = previous result, and so on...)
  for (var x = 0; x < arrayList.length; x++){
    if (x === 1){
      symmetricResult = diffArray(arrayList[0], arrayList[1]);
    } else if (x > 1){
      symmetricResult = diffArray(symmetricResult, arrayList[x]);
    }
  }

  if (symmetricResult.length > 0){
    return symmetricResult;
  } else {
    return args;
  }
}

function diffArray(arr1, arr2) {
  var newArr = [];  
  var foundAMatch = false;
  var currentNum = 0;
  var previousNum = 0;
  var finalArr = [];
  
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
      // Add the unmatched entry to the newArr array
      newArr.push(arr2[k]);
    } else {
      foundAMatch = false; // Reset flag
    }
  }
  
  // Clean up array - remove any duplicate references
  for (var x = 0; x < newArr.length; x++){
    currentNum = newArr[x];
    if (currentNum !== previousNum){
      finalArr.push(currentNum);
      previousNum = currentNum;
    }
  }
  
  // Sort array - order numbers in ascending order
  var superFinalArr = [];
  var inserted = false;
  for (var a = 0; a < finalArr.length; a++){
    if (a === 0){
      superFinalArr.push(finalArr[a]);
    } else {
      for (var b = 0; b < superFinalArr.length; b++){
        if (finalArr[a] < superFinalArr[b]){
          superFinalArr.splice(b, 0, finalArr[a]);
          inserted = true;
          break;
        }
      }
      
      if (inserted === false){
        superFinalArr.push(finalArr[a]);
        inserted = true;
      }
      
      inserted = false;
    }
  }
  
  // Done!
  return superFinalArr;
}

sym([1, 2, 3], [5, 2, 1, 4]);

// ERRATA
//
// At least 2 arrays should be entered
// Only 1 array can also be entered (pointless though - just returns it)
// Arrays MUST be numeric
// Combined this from my other array difference code
