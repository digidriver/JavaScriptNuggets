// Function updateInventory
// Compares and updates inventory against a fresh delivery
// If new items are received, they are added
// If extras of existing items are received, items are updated
// Array is returned, sorted alphabetically by item description

function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  var resultArray = [];
  var tempArray = [];
  var foundMatch = false;
  
  // Start building result
  // Use a temp array to iterate and start adding/updating elements
  arr1.forEach(function(item){
    arr2.forEach(function(innerItem){
      if (item[1].toLowerCase() === innerItem[1].toLowerCase()){
        tempArray.push([item[0] + innerItem[0], item[1]]);
        foundMatch = true;
      }
    });
    
    if (foundMatch === false){
      tempArray.push(item);
    }
    
    foundMatch = false;
  });
  
  // Reverse and iterate through other array
  // No need to update common elements (already did that above)
  arr2.forEach(function(item){
    arr1.forEach(function(innerItem){
      if (item[1].toLowerCase() === innerItem[1].toLowerCase()){
        foundMatch = true;
      }
    });
    
    if (foundMatch === false){
      tempArray.push(item);
    }
    
    foundMatch = false;
  });
  
  // Sort array alphabetically by item
  tempArray.sort(function (a, b) {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  });
  
  // ...and done
  resultArray = tempArray;
  return resultArray;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

// ERRATA
//
// Two arrays MUST be provided as arguments
// Keep array structure as in example variables: [number, string]
//
// Final array is sorted by item description (2nd item of inner array)
// (Not sure exact use of comparisons; array is sorted alphabetically)
