function chunkArrayInGroups(arr, size) {
  // Break it up.
  var tempArray = [];
  var tempMicroArray = [];
  var tempString = "";
  var sizeTracker = size;
  if (size > 0){
    // Size parameter is greater than zero (minimum group size: 1 item per group)
    if (size < arr.length){
      // Creating at least 2 groups
      for (var i = 0; i < arr.length; i++){
        if (sizeTracker > 0){
          // We are building a mini-array
          tempMicroArray.push(arr[i]);
          sizeTracker--;
        } else {
          // We are done building the mini-array; push it to the new array
          tempArray.push(tempMicroArray);
          tempMicroArray = [];
          
          // Get ready to build the next mini-array
          sizeTracker = size;
          tempMicroArray.push(arr[i]);
          sizeTracker--;
        }
      }
      
      // Push any leftover mini-array into the new array
      if (tempMicroArray.length > 0){
        tempArray.push(tempMicroArray);
      }
      
      // Assign new array to arr (Yes, this is probably wrong, but freeCodeCamp seems to put this var at end)
      // Kind of "giving back" the new value :)
      arr = tempArray;
      console.log("Function chunkArrayInGroups() is now complete! New array being returned.");
      return arr;
    }
  }
  
  console.log("Parameter \"size\" either greater than / equal to array length or zero / negative. Returning original array.");
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
