// Function orbitalPeriod
// Gets orbital period from average altitude of object above earth
// Works for calculating orbital period of one or more objects

function orbitalPeriod(arr) {
  // Math values for calculation
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  // Convert arguments list into array
  var prototypeArray = arr.slice.call(arguments);
  var resultArray = [];

  // Object manipulation items
  var nProp = "name";
  var aProp = "avgAlt";
  var currentObjCluster;
  var currentObj;
  
  // Walk through object array, push post-calc objects to new array
  for (var x = 0; x < prototypeArray.length; x++){
    currentObjCluster = prototypeArray[x];
    for (var y = 0; y < currentObjCluster.length; y++){
      currentObj = currentObjCluster[y];
      if (currentObj.hasOwnProperty(aProp) &&
          currentObj.hasOwnProperty(nProp)){
        resultArray.push({name: currentObj[nProp],
          orbitalPeriod: getOrbitalPeriod(currentObj[aProp], earthRadius, GM)});
      }
    }
  }
  
  // ...and done :)
  return resultArray;
}

function getOrbitalPeriod(avgAlt,earthRadius,GM){
  return Math.round((Math.PI * 2) * (Math.sqrt((Math.pow(earthRadius + avgAlt,3))/GM)));
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

// ERRATA
//
// Object array is required as argument
// More than 1 item can be calculated (result is array of objects)
// This will not work with negative avgAlt values
