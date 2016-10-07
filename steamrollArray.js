// Function steamrollArray
// Flattens multiple levels of nesting in array
// (Example: [1, [2], [3, [[4]]]] becomes [1, 2, 3, 4])

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var firstArray = [];
  var finalArray = [];
  arr.forEach(function(item){
    if (Array.isArray(item)){
      item.forEach(function(innerItem){
        firstArray.push(innerItem);
      });
    } else {
      firstArray.push(item);
    }
  });
  
  
  firstArray.forEach(function(item){
    if(Array.isArray(item)){
      item.forEach(function(innerItem){
        if (Array.isArray(innerItem)){
          innerItem.forEach(function(deepItem){
            console.log(deepItem);
            finalArray.push(deepItem);
          });
        } else {
          finalArray.push(innerItem);
        }
      });
    } else {
      finalArray.push(item);
    }
  });
  
  return finalArray;
}

steamrollArray([1, [2], [3, [[4]]]]);

// ERRATA
//
// Most flattening is done in the first pass.
// 2nd pass takes care of leftover inner arrays.
