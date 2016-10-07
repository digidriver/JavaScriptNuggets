// Function addTogether
// Creates a function returning the sum of two arguments
// If only one argument is given, returns fn that expects an arg and returns sum

// ...yeah, I'm confused too :)

function addTogether() {
  var result = 0;
  if (arguments.length < 2){
    if (typeof(arguments[0]) === "string"){
      return undefined;
    }
    
    var firstItem = arguments[0];
    return function(secondItem){
      if ((firstItem !== undefined) && (secondItem !== undefined)){
        if ((Array.isArray(firstItem))||(Array.isArray(secondItem))){
          return undefined;
        }
        
        if ((typeof(firstItem) !== "number")||
            (typeof(secondItem) !== "number")){
          return undefined;
        }
        
        return firstItem + secondItem;
      } else {
        return undefined;
      }
    };
  } else if (arguments.length >= 2){
    for (var x = 0; x < arguments.length; x++){
      var item = arguments[x];
      if (typeof(item) === "number"){
        result += item;
      } else {
        result = undefined;
        break;
      }
    }
  }
  
  return result;
}

addTogether(2,3);

// ERRATA
//
// No more than 2 arg sets can be given (i.e. no more than 2 sets of parentheses)
