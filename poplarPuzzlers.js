// And now... a tap dance! :)

var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

alert(puzzlers[puzzlers[1](3)](puzzlers[3](9)));

// The formula calculates what happens when
// * the result of passing 9 into the fourth function of the puzzlers array is then passed into 
// * the function whose index matches the result of passing 3 into the second function of the puzzlers array.
