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

// ...in case anyone wants to see it, my first attempt is below. It works on everything except arrays with large consecutive repeats.
/*

function pairwise(arr, arg) {
  // Convert arguments list into array
  var prototypeArray = arr.slice.call(arguments);
  
  // Harvest array and remaining argument details
  var actualArray = arguments[0];
  var sumTarget = arguments[1];
  
  var indexArray = [];
  var currentItem = 0;
  var currentTarget = 0;
  var matchFound = false;
  
  var result = 0;
  
  //console.log(actualArray);
  //console.log(sumTarget);
  
  if (actualArray.length === 0){
    return 0;
  } else {
    for (var x = 0; x < actualArray.length; x++){
      currentItem = actualArray[x];
      //console.log(currentItem);
      currentTarget = sumTarget - currentItem;
      //console.log(indexArray);
      for (var z = 0; z < indexArray.length; z++){
        //console.log(actualArray.indexOf(currentItem));
        if (indexArray[z] === actualArray.indexOf(currentItem)){ //...this was the problem: always found first repeat = false positive
          matchFound = true;
        }
      }
        
      if (matchFound === false){
        for (var a = 0; a < actualArray.length; a++){
          if (a !== x){
            if (matchFound === false){
              if (actualArray[a] === currentTarget){
                indexArray.push(x);
                indexArray.push(a);
                matchFound = true;
                break;
              }
            }
          }
        }
      }
      
      matchFound = false;
    }
  }
  
  indexArray.forEach(function(item){
    result += item;
  });
  
  //console.log(indexArray);
  //console.log(result);
  return result;
}

pairwise([0, 0, 0, 0, 1, 1], 1);

// search array
// search target = sumTarget - currentItem (e.g. 20 - 7 = 13)
// if match is found:
// * record index
// * add index of currentItem and index of foundMatch to indexArray
// * continue (we found a pair, stop looking in this iteration)
//
// NEXT iteration:
// * look at currentItem
// * if currentItem's index is already in indexArray:
//   - skip it
//   - else, do normal routine
*/
