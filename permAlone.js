// Function permAlone
// Returns number of permutations that do not have consecutive letters
// (Any combinations of letters like 'aab' or 'bcdeefgh' are excluded)

function permAlone(str) {
  var matchCount = 0;
  var matchItem;
  
  var masterList = [];
  var usedLetters = [];
  
  var uniqueCount = 0;
  var hasDupes = false;
  var currentChar = "";
  
  // Initial lint check: is string one character long or repeated?
  if (str.length === 1){
    // Only one possible permutation: the string itself
    return 1;
  } else {
    // Check the string quick to see if it's just one repeating char
    for (var x = 0; x < str.length; x++){
      if (x === 0){
        matchItem = str[x];
      } else {
        if (str[x] === matchItem){
          matchCount++;
        }
      }
    }
  }
  
  if ((matchCount + 1) === str.length){
    // This happens with strings like 'aaa' or 'zzzzzzz'
    return 0;
  } else {
    // We have a valid string to check
    // Iterate recursively through all possible matches
    // (Build list to check later)
    var getMasterList = function permutate(str) {
      var currentPiece = [];
      var charArray = [];
      
      // To iterate through characters in string
      charArray = str.split("");
      for (var y = 0; y < charArray.length; y++){
        // Look for permutations on current piece
        currentPiece = charArray.splice(y, 1);
        
        // Add piece to current character use pile
        usedLetters.push(currentPiece);
        
        // Base case
        if (charArray.length === 0){
          masterList[masterList.length] = usedLetters.join("");
        }
        
        // ...else keep recursively iterating
        permutate(charArray.join(""));
        
        // Cleanup
        charArray.splice(y, 0, currentPiece);
        usedLetters.pop();
      }
    };
  
    // Populate permArr with data (actually call the fn)
    getMasterList(str);
  }
  
  // Check created list, count items with no consecutive chars
  for (var z = 0; z < masterList.length; z++){
    for (var a = 0; a < masterList[z].length; a++){
      if (a === 0){
        currentChar = masterList[z][a];
      } else {
        if (masterList[z][a] === currentChar){
          hasDupes = true;
        } else {
          currentChar = masterList[z][a];
        }
      }
    }
    
    if (hasDupes === false){
      uniqueCount++;
    }
    
    hasDupes = false;
  }
  
  // Finally :)
  return uniqueCount;
}

permAlone('a');

// ERRATA
//
// * String argument is required
// * String must be at least 1 character long
//
// String is initially checked to see if it's only 1 character long or repeating.
// String is then iterated on:
// * An old piece of code generates all possible permutations.
// * Once array is made, array is iterated to count unique permutations (no consecutive repeated chars)
//
// Result is returned as number
