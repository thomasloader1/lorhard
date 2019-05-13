window.onload = init;

function init() {
  document.getElementById("validationServer01").onfocus = addMyClass;
}

function addMyClass() {
  var classString = this.className; // returns the string of all the classes for myDiv
  var newClass = classString.concat(" is-valid"); // Adds the class "main__section" to the string (notice the leading space)
  this.className = newClass; // sets className to the new string
}



