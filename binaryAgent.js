// Function binaryAgent
// Translate a binary string to plain English

function binaryAgent(str) {
  var result = "";
  
  // Create an array of individual letters
  var strArray = str.split(" ");

  // Iterate over array, translating each binary letter
  // Append each translated letter to string
  strArray.forEach(function(binaryLetter){
    result += String.fromCharCode(parseInt(binaryLetter, 2));
  });
  
  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// ERRATA
//
// binaryAgent should have an array with something in it.
// It'll work if str parameter is empty, but won't be useful :)
