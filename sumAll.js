// Function sumAll adds all numbers of a range specified
// Array parameter passed in has two numbers
// Lowest number doesn't always come first in array

function sumAll(arr) {
  // Assume groomed parameter (i.e. array parameter arr will always have two numbers)  
  var maxNumber = Math.max(...arr);
  var minNumber = Math.min(...arr);
  
  // Create an array and push in min and max numbers (and all numbers in between)  
  var tempArray = [];  
  for(var i = minNumber; i <= maxNumber; i++){
    tempArray.push(i);
  }
  
  // Reduce tempArray: sum up all items
  var result = tempArray.reduce(function(previousValue, currentValue){
    return previousValue + currentValue;
  });  
  
  // Done.
  return result;
}

sumAll([1, 4]);
