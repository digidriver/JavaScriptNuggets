// Function pairELement
// Completes a given partial DNA sequence by finishing the pair for each element; result is a new 2D array
// Example: pairELement("GCG") results in [["G","C"],["C","G"],["G","C"]]

function pairElement(str) {
  var result = [];
  var twoDeeArray = [];
  for (var x = 0; x < str.length; x++){
    switch(str[x].toUpperCase()){
      case "A":
        twoDeeArray.push("A");
        twoDeeArray.push("T");
        result.push(twoDeeArray);
        twoDeeArray = [];
        break;
      case "C":
        twoDeeArray.push("C");
        twoDeeArray.push("G");
        result.push(twoDeeArray);
        twoDeeArray = [];
        break;
      case "G":
        twoDeeArray.push("G");
        twoDeeArray.push("C");
        result.push(twoDeeArray);
        twoDeeArray = [];
        break;
      case "T":
        twoDeeArray.push("T");
        twoDeeArray.push("A");
        result.push(twoDeeArray);
        twoDeeArray = [];
        break;
      default:
        break;
    }
  }
  return result;
}

pairElement("GCG");
