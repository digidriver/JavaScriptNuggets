// Function convertToRoman takes a number value and turns it into a roman numeral, returned as a string

function convertToRoman(num) {
  // Are you ready IV this?
  
  var individualNum = 0;
  var powOfTen = 0;
  var romanEquivalent = "";  
  var thousands = "";
  var hundreds = "";
  var tens = "";
  var ones = "";    
  
  // Take num input, turn into string array
  var stringyNum = String(num);
  
  for (var i = 0; i < stringyNum.length; i++){
    // Take each "place" and determine its power value
    powOfTen = Math.pow(10,((stringyNum.length - 1) - i));    
    
    // Evaluate corresponding roman numerals
    individualNum = parseInt(stringyNum[i]);
    
    switch(powOfTen){
      case 1000:
        for(var k = 0; k < individualNum; k++){
          thousands += "M";
        }
        break;
      case 100:
        hundreds = workHorse(romanEquivalent, individualNum, "C", "D", "M");
        break;
      case 10:
        tens += workHorse(romanEquivalent, individualNum, "X", "L", "C");
        break;
      case 1:
        ones += workHorse(romanEquivalent, individualNum, "I", "V", "X");
        break;
      default:
        break;
    }
  }
  
  // Return result string
  romanEquivalent = thousands + hundreds + tens + ones;
  return romanEquivalent;
}

function workHorse(interimString, individualNum, mainSymbol, halfwaySymbol, endSymbol){
  if (individualNum === 9){
    interimString += mainSymbol + endSymbol;
  } else if ((individualNum > 5) && (individualNum < 9)){
    interimString += halfwaySymbol;
    for(var x = 0; x < individualNum - 5; x++){
      interimString += mainSymbol;
    }
  } else if (individualNum === 5){
    interimString += halfwaySymbol;
  } else if (individualNum === 4){
    interimString += mainSymbol + halfwaySymbol;
  } else if ((individualNum > 0) && (individualNum < 4)){
    for(var d = 0; d < individualNum; d++){
      interimString += mainSymbol;
    }
  }
  
  return interimString;
}

convertToRoman(36);
