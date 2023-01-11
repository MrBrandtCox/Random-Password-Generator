// Assignment Code
var generateBtn = document.querySelector("#generate");
//set some functions
var
var
var
var
var
var
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
