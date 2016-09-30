// Function whatIsInAName
// Search collection (array of objects) using source (object)
// Return array of objects matching source object/property query

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  // Grab object array and source/search object
  var prototypeArray = collection.slice.call(arguments);
  
  // Isolate object array
  var justCollection = prototypeArray[0];
  
  var tempObjArray = [];
  var propertyMatchCount = 0;
  var currentObject;
  var objectFailsMatch = false;
  
  for (var x = 0; x < justCollection.length; x++){
    currentObject = justCollection[x];
    for (var property in source){
      if (currentObject.hasOwnProperty(property)){        
        // Property match found: check property data
        if (source[property] === currentObject[property]){
          propertyMatchCount++;
        } else {
          objectFailsMatch = true;
          break;
        }
      }
    }
    
    if (objectFailsMatch === false){
      // We may have found a matching object; verify
      // (were all fields of the source/search object matched?)
      if (propertyMatchCount === Object.keys(source).length){
        tempObjArray.push(currentObject);
      }
    }
    
    // Reset counts/flags for next object
    propertyMatchCount = 0;
    objectFailsMatch = false;
  }
  
  arr = tempObjArray;
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
