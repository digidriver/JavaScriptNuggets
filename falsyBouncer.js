// Function bouncer and valueVerify work to remove falsy values from a given array.

// Helper function valueVerify
function valueVerify(item){  
  // Taking advantage of the fact that false, null, 0, "", undefined and NaN have a boolean value of false
  if (!item){
    return false;
  } else {
    // We have a true value
    return true;
  }
}

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(valueVerify);
}

bouncer([7, "ate", "", false, 9]);
//bouncer([false, null, 0, NaN, undefined, ""]);
//bouncer([1, null, NaN, 2, undefined]);
