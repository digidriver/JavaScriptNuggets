// Function fearNotLetter
// finds missing letter in a letter range (passed in as string)
// returns letter that was missing

function fearNotLetter(str) {
  var missingLetterResult = "";
  var letterValArray = [];
  var currentLetter = '';
  var currentLetterVal = 0;
  var previousLetterVal = 0;  
  var difference = 0;
  var missingLetterVal = 0;
  
  // Build an array of letter values from str parameter
  for (var x = 0; x < str.length; x++){
    currentLetter = str[x];
    currentLetterVal = currentLetter.charCodeAt(0);
    letterValArray.push(currentLetterVal);
  }
  
  // Sweep array and see any letters are missing from the range
  // Array sweep assumes letters are ordered alphabetically (letter values increasing)
  letterValArray.forEach(function(item){
    if (previousLetterVal === 0){
      previousLetterVal = item;
    } else {
      difference = item - previousLetterVal;
      if (difference > 1){
        for (var y = 1; y < difference; y++){
          missingLetterVal = previousLetterVal + y;
          missingLetterResult += String.fromCharCode(missingLetterVal);
        }
      }
      
      previousLetterVal = item;
    }
  });
  
  // Did we find any missing letters? If not, return undefined as result
  if (missingLetterResult.length > 0){
    return missingLetterResult;
  } else
    return undefined;
}

fearNotLetter("abce");

// NOTE: Program makes following assumptions:
// * Letters are ordered alphabetically
// * Only one letter is missing from range
//
// The program will find additional missing letters from range, but will NOT find missing letters if not in alpha order
// (e.g. "abce" finds missing letter d, "abcefgi" finds missing letters dh, but "abcefa" only finds missing letter d)
