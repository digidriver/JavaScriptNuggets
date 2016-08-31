// Function rot13 returns a decoded copy of a ROT13 string
// (first comment below is an example of an encoded string)

function rot13(str) { // LBH QVQ VG!  
  // A quick key...
  
  /*console.log(String.fromCharCode(65)); //A...
  console.log(String.fromCharCode(66));
  console.log(String.fromCharCode(67));
  console.log(String.fromCharCode(68));
  console.log(String.fromCharCode(69));
  console.log(String.fromCharCode(70));
  console.log(String.fromCharCode(71));
  console.log(String.fromCharCode(72));
  console.log(String.fromCharCode(73));
  console.log(String.fromCharCode(74));
  console.log(String.fromCharCode(75));
  console.log(String.fromCharCode(76));
  console.log(String.fromCharCode(77)); //...to M
  
  console.log(String.fromCharCode(78)); //N...
  console.log(String.fromCharCode(79));
  console.log(String.fromCharCode(80));
  console.log(String.fromCharCode(81));
  console.log(String.fromCharCode(82));
  console.log(String.fromCharCode(83));
  console.log(String.fromCharCode(84));
  console.log(String.fromCharCode(85));
  console.log(String.fromCharCode(86));
  console.log(String.fromCharCode(87));
  console.log(String.fromCharCode(88));
  console.log(String.fromCharCode(89));
  console.log(String.fromCharCode(90)); //...to Z */
  
  var decodedString = "";
  var convertedValue = 0; // The "value" of each letter
  
  // Decode the given string
  for (var i = 0; i < str.length; i++){
    convertedValue = str.charCodeAt(i);
    if ((convertedValue >= 65) && (convertedValue <= 77)){
      // Letters A through M... add 13 to char "value"
      decodedString += String.fromCharCode(convertedValue + 13);
    } else if ((convertedValue >= 78) && (convertedValue <= 90)){
      // Letters N through Z... subtract 13 from char "value"
      decodedString += String.fromCharCode(convertedValue - 13);
    } else {
      // Char is not a letter; pass straight through
      decodedString += str[i];
    }
  }
  
  return decodedString;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
