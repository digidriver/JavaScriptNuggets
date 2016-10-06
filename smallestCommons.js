// Function smallestCommons
// Finds smallest common multiple of params
// Must be evenly divisible by first and last numbers in range
// Must be evenly divisible by ALL numbers in range
// Numbers might not be in order

function smallestCommons(arr) {
  var number1 = arr[0];
  var number2 = arr[1];
  var smallNum = 0;
  var largeNum = 0;
  var numResult = 0;
  var tempArray = [];
  var numItemsInRange = 0;
  var maxFactor = 1;
  var counter = 0;
  var matchCounter = 0;
  
  if (number1 < number2){
    smallNum = number1;
    largeNum = number2;
  } else if (number1 > number2){
    smallNum = number2;
    largeNum = number1;
  }
  
  for (var x = smallNum; x <= largeNum; x++){
    tempArray.push(x);
    numItemsInRange++;
  }
  
  // Find max factor (multiple which can be divided by all)
  // (May not necessarily be smallest common multiple)
  for (var y = tempArray.length - 1; y >= 0; y--){
    // Multiply last two items to begin checking divisibility
    if(counter < 2){
      maxFactor *= tempArray[y];
      counter++;
    } else {
      // Check if maxFactor can be divided by others
      // Multiply element to maxFactor if it can't divide it
      if(maxFactor % tempArray[y] !== 0){
        maxFactor *= tempArray[y];
      }
    }
  }
  
  // Iterate up to maxFactor to find smallest common multiple
  for (var currentNum = 0; currentNum <= maxFactor; currentNum += largeNum){
    if (currentNum > 1) {
      for (var a = smallNum; a <= largeNum; a++){
        if (currentNum % a === 0){
          matchCounter++;
        }
      }
      
      if (matchCounter === numItemsInRange){
        // We found the least common denominator
        numResult = currentNum;
        return numResult;
      } else {
        matchCounter = 0;
      }
    }
  }
  
  return numResult;
}


smallestCommons([1,5]);

// Errata
//
// * arr parameter MUST have two and only two elements
// * Test cases do not account for negative numbers
// * Range numbers and resulting calculations assumed in valid ranges (be careful, calculated numbers get real big real fast)
