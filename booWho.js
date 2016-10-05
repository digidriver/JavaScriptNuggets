// Function booWho
// Find out if something is a boolean primitive
// (Strictly true or false)

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  
  // If true or false is value of bool, it is a boolean primitive
  // If it is ***any*** other value, it is not a boolean primitive
  if (bool === true){
    return true;
  } else if (bool === false){
    return true;
  } else {
    return false;
  }
}

booWho(null);
