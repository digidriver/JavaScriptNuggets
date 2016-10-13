// Make a Person
// Person object has the following methods:
//
// * getFirstName
// * getLastName
// * getFullName
// * setFirstName
// * setLastName
// * setFullName
//
// Object can only interact with others via method use

var Person = function(_firstAndLast) {
  this.getFirstName = function(){
    return _firstAndLast.split(" ")[0];
  };
  
  this.getLastName = function(){
    return _firstAndLast.split(" ")[1];
  };
  
  this.getFullName = function(){
    return _firstAndLast;
  };
  
  this.setFirstName = function(first){
    _firstAndLast = first + " " + _firstAndLast.split(" ")[1];
  };
  
  this.setLastName = function(last){
    _firstAndLast = _firstAndLast.split(" ")[0] + " " + last;
  };
  
  this.setFullName = function(firstAndLast){
    _firstAndLast = firstAndLast;
  };
};

var bob = new Person('Bob Ross');
console.log(bob);
bob.getFullName();

// ERRATA
//
// Closures allow for a different approach to JS objects:
// Methods as properties! (...weeeird. I know.)
//
// * A Person object is instanced with a name
// * Each function either gets or sets data
// * The data is not directly accessed, ever (only through methods)
//
// ...and now I'm a fan of closures :)
