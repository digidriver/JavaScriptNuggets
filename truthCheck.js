// Function truthCheck
// Check a collection to see if pre variable (predicate) is true on all elements
// Returns true or false

function truthCheck(collection, pre) {
  // Is everyone being true?
  
  var result = [];
  
  // Convert arguments list into array
  var prototypeArray = collection.slice.call(arguments);
  
  // Harvest array and remaining argument details
  var actualArray = arguments[0];
  var truthTest = arguments[1];
  var foundFalsy = false;
  
  for (var x = 0; x < actualArray.length; x++){
    var currentObj = actualArray[x];
    if (currentObj.hasOwnProperty(truthTest)){
      var currentValue = currentObj[truthTest];
      if (!currentValue){
        foundFalsy = true;
        break;
      }
    } else {
      foundFalsy = true;
      break;
    }
  }
  
  if (foundFalsy){
    return false;
  } else {
    return true;
  }
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// ERRATA
//
// * Object array and predicate are required parameters
// * Object array must have at least one element
