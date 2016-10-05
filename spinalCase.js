// Function spinalCase
// Converts phrases like "I am here" and "IAmHere" to "i-am-here"

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  var newStr = "";
  var currentSymbol = "";
  var upperCheck = "";
  var justConverted = false;
  for (var x = 0; x < str.length; x++){
    currentSymbol = str[x];
    upperCheck = currentSymbol.toUpperCase();
    switch(currentSymbol){
      case " ":
      case "-":
      case "_":
        newStr += "-";
        justConverted = true;
        break;
      default:
        if (currentSymbol === upperCheck){
          if (x !== 0){
            if (!justConverted){
              newStr += "-" + currentSymbol.toLowerCase();
              justConverted = true;
            } else {
              newStr += currentSymbol.toLowerCase();
              justConverted = false;
            }
          } else {
            newStr += currentSymbol.toLowerCase();
          }
        } else {
          newStr += currentSymbol.toLowerCase();
          justConverted = false;
        }
        break;
    }
  }
  
  return newStr;
}

spinalCase('This Is Spinal Tap');
