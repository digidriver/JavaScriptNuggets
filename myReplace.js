// Function myReplace
// Modify a sentence (str variable); replace word in sentence (before variable) with new word (after variable)
// If word being replaced is capitalized, new word is capitalized too

function myReplace(str, before, after) {
  var resultStr = "";
  var modifiedAfter = "";
  
  // Check case of word to be replaced
  var caseMapping = checkOriginalCase(before);
  
  // Modify new word so it respects original word case
  for (var a = 0; a < after.length; a++){
    if (a === 0){
      if (caseMapping[a] === true){
        modifiedAfter += after[a].toUpperCase();
      } else {
        modifiedAfter += after[a];
      }
    } else {
      modifiedAfter+= after[a];
    }
  }
  
  // Finally, replace original word with new word
  resultStr = str.replace(before, modifiedAfter);
  
  // Return result
  return resultStr;
}

function checkOriginalCase(originalStr){
  var result = [];
  var tempLetter = '';
  for (var x = 0; x < originalStr.length; x++){
    tempLetter = originalStr[x].toUpperCase();
    if (originalStr[x] === tempLetter){
      result.push(true);
    } else {
      result.push(false);
    }
  }
  
  return result;
}

myReplace("A quick brown fox Jumped Over The lazy dog", "Jumped Over The", "leaped past my");

// NOTE: The algorithm is geared to perfectly replace only ONE word. While it is possible to replace more than
// one word, only the first word will retain capitalization as necessary.
