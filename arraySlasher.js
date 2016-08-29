// The slasher function returns remaining elements of array after chopping off n elements from head

function slasher(arr, howMany) {  
  if (howMany > 0){
    // We're chopping off at least one item
    if (howMany < arr.length){
      // We're not chopping off all items in array
      console.log("Function slasher will return modified array (removing " + howMany + " item(s) from head...");
      arr.splice(0, howMany);
      return arr;
    }
    
    // We're here because howMany was greater than (or equal to) number of array items; return empty array
    console.log("Parameter howMany was greater than (or equal to) number of array items; returning empty array.");
    var emptyArray = [];
    return emptyArray;
  }
  
  // We're here because howMany was less than (or equal to) 0; return original array
  console.log("Parameter howMany was less than (or equal to) 0; returning original array.");
  return arr;
}

slasher([1, 2, 3], 3);
