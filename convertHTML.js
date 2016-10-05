// Function convertHTML
// Converts &, <, >, ", ' symbols into HTML entities
// Returns string with converted symbols

function convertHTML(str) {
  // &colon;&rpar;
  
  var htmlStr = "";
  
  // Sweep str and replace individual symbols
  for (var x = 0; x < str.length; x++){
    switch(str[x]){
      case '&':
        htmlStr += str[x].replace(/&/g, "&amp;");
        break;
      case '<':
        htmlStr += str[x].replace(/</g, "&lt;");
        break;
      case '>':
        htmlStr += str[x].replace(/>/g, "&gt;");
        break;
      case '\"':
        htmlStr += str[x].replace(/\"/g, "&quot;");
        break;
      case '\'':
        htmlStr += str[x].replace(/\'/g, "&apos;");
        break;
      default:
        htmlStr += str[x];
        break;
    }
  }
  
  return htmlStr;
}

convertHTML("Dolce & Gabbana");
