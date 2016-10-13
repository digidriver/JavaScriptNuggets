// Function pairwise
// Find pairs in arr array whose sum equals value of arg variable
// Return sum of their indices
// Ex: [7, 9, 11, 13, 15] as array, 20 as arg
// Sum of indices for pairs that add up to 20 = 6

function pairwise(arr, arg) {
  var numArray = arr.slice();
  var target = arg;
  var indexSumResult = 0;
  
  for (var x = 0; x < numArray.length; x++){
    for (var y = x + 1; y < numArray.length; y++){
      if (numArray[x] + numArray[y] === target){
        indexSumResult += x + y;
        numArray[x] = NaN;
        numArray[y] = NaN;
      }
    }
  }
  
  return indexSumResult;
}

pairwise([1,4,2,3,0,5], 7);

// ERRATA
//
// Array is required (MUST pass in at least an empty array)
// arg variable required (MUST be a number)
// arg variable might not be truly required if arr length is 0
//
// ...still can't believe answer was this simple :)
