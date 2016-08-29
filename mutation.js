// Function mutation returns true if first element contains all letters of string in second element

function mutation(arr) {
  // Create strings to process first and second elements of string array
  var firstElement = arr[0].toLowerCase();
  var secondElement = arr[1].toLowerCase();
  
  // Create boolean var to indicate whether or not all letters in second string were found in first string
  var allLettersPresent = true;
  
  for (var i = 0; i < secondElement.length; i++){
    // If any of the letters in the second string are not found in the first string, stop and return false
    if (!firstElement.includes(secondElement[i])){
      return false;
    }
  }
  
  // We're here because all letters from second string were found in first string; return true (pre-assigned up top)
  return allLettersPresent;
}

mutation(["hello", "hey"]);

// As always, there are probably easier (or WAY easier) ways of doing this; this is what came to mind as I solved
