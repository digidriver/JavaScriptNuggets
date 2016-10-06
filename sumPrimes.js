// Function sumPrimes
// Returns sum of all prime numbers up to / including provided number, if prime
// (Prime numbers are greater than one and only divisible by 1 & the number itself)

function sumPrimes(num) {
  var primeArray = [];
  var notAPrime = false;
  var summedResult = 0;
  for (var individualNumber = 0; individualNumber <= num; individualNumber++){
    if (individualNumber > 1){
      for (var currentNumLooper = 0; currentNumLooper < individualNumber; currentNumLooper++){
        if (currentNumLooper > 1){
          if (individualNumber % currentNumLooper === 0){
            notAPrime = true;
          }
        }
      }
      
      if (notAPrime === false){
        primeArray.push(individualNumber);
      }
      
      notAPrime = false;
    }
  }
  
  summedResult = primeArray.reduce(function(previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
  });
  
  return summedResult;
}

sumPrimes(10);
