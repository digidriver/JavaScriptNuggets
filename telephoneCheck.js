// Function telephoneCheck
// Verifying a phone number string is a valid US phone number

function telephoneCheck(str) {
  // Good luck!
  
  var parenStatus = "";
  var numCount = 0;
  var openParenFound = false;
  var closeParenFound = false;
  var parenNumCount = 0;
  
  for (var x = 0; x < str.length; x++){
    switch(str[x]){
      case " ":
        break;
      case "-":
        if (x === 0){
          return false;
        }
        break;
      case "(":
        parenStatus = "open";
        openParenFound = true;
        break;
      case ")":
        parenStatus = "closed";
        closeParenFound = true;
        if (openParenFound === false){
          return false;
        }
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        numCount++;
        if (parenStatus === "open"){
          parenNumCount++;
          if (parenNumCount > 3){
            return false;
          }
        }
        if (numCount > 11){
          return false;
        }
        break;
      default:
        return false;
    }
  }
  
  if (numCount === 11){
    if (str[0] !== "1"){
      return false;
    }
  } else if (numCount < 10){
    return false;
  }
  
  return true;
}



telephoneCheck("555-5555");

// ERRATA
//
// Solved this one a LOT quicker than I thought!
// I used the test cases like primitive TDD (test-driven development), which helped develop code faster.
//
// This could probably be more efficient.
