// Function getIndexToIns
// Returns index where argument num will be inserted into array
// (Array is sorted first, then checked to see where num fits)

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

  // Declare var to be returned
  var atWhatIndex = -1;
  
  // Convert arguments list into a proper array
  var prototypeArray = arr.slice.call(arguments);
  
  // Harvest array and remaining argument details
  var actualSortedArray = arguments[0];
  var itemToInsert = arguments[1];
  
  // Sort the array argument in ascending order
  actualSortedArray.sort(function (a, b) {
    return a - b; // a - b is ascending, b - a is descending
  });
  
  console.log(actualSortedArray);
  console.log(itemToInsert);
  
  // Iterate through array to find spot to insert item
  for(var i = 0; i < actualSortedArray.length; i++){
    if (itemToInsert <= actualSortedArray[i]){
      atWhatIndex = i;
      break;
    }
  }
  
  // NOTE: IF you use descending sort order, you'll probably
  // need to reverse how the array is traversed (or how it's
  // compared)
  
  // If we iterated through array but still didn't find index...
  if (atWhatIndex === -1){
    // All values in array were smaller than item
    // Item index will be end of array
    atWhatIndex = actualSortedArray.length;
  }
  
  return atWhatIndex;
}

getIndexToIns([2, 5, 10], 15);

// NOTES
// * Function works on arrays with 0 or more elements
// * num argument is required
