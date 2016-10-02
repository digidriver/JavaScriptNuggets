// Function translatePigLatin
// Return pig latin version of word
// Words starting without consonants end in "way"
// Everything else: take first consonant(s) out and put at end of word, add "ay"

function translatePigLatin(str) {
  var result = "";
  var minorPiece = "";
  var majorPiece = "";
  var startsWithAVowel = startsWithVowel(str);
  if (startsWithAVowel){
    result = str + "way";
  } else {
    minorPiece = getFirstConsonantPiece(str);
    majorPiece = str.substring(minorPiece.length);
    result = majorPiece + minorPiece + "ay";
  }
  
  return result;
}

function startsWithVowel(word) {
  switch(word[0]){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return true;
    default:
      return false;
  }
}

function getFirstConsonantPiece(word) {
  var result = "";
  for (var a = 0; a < word.length; a++){
    if ((word[a].toLowerCase() !== 'a') &&
        (word[a].toLowerCase() !== 'e') &&
        (word[a].toLowerCase() !== 'i') &&
        (word[a].toLowerCase() !== 'o') &&
        (word[a].toLowerCase() !== 'u')) {
      result += word[a];
    } else {
      break;
    }
  }
  
  return result;
}

translatePigLatin("consonant");
