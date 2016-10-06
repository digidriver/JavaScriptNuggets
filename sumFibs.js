// Function sumFibs
// Returns sum of all odd Fibonacci numbers <= num

function sumFibs(num) {
  // The Fibonacci sequence: 1,1,2,3,5,8,...
  // The math: first two numbers are 1s; every additional number is sum of previous two
  // (3rd number is 1+1=2, 4th is 1+2=3, 5th is 2+3=5, etc)
  
  var finalFibSum = 0;
  var currentFibNum = 1;
  var previousFibNum = 1;
  var fibNumDone = false;
  var oddFibArray = [1, 1];
  var summedResult = 0;
  
  if (num <= 0){
    // Do nothing; will return 0 as result
  } else {
    while (fibNumDone === false){
      finalFibSum = currentFibNum + previousFibNum;
      previousFibNum = currentFibNum;
      currentFibNum = finalFibSum;
      if (finalFibSum % 2 !== 0){
        if (finalFibSum > num){
          fibNumDone = true;
        } else {
          oddFibArray.push(finalFibSum);
        }
      }
    }
    
    summedResult = oddFibArray.reduce(function(previousValue, currentValue, currentIndex, array) {
      return previousValue + currentValue;
    });
  }

  return summedResult;
}

sumFibs(4);
