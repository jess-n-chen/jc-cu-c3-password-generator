// Global Variables
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Possible Character Choices
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

function charType() {
  var promptLower = prompt(
    "Would you like your password to include lowercase characters?"
  );
}

function generatePassword() {
  // Ask user how long they would like the password to be
  var promptLength = prompt(
    "How long would you like your password to be? Must be between 8-128 characters"
  );

  // Check for Valid Answer
  if (promptLength === "" || promptLength === null || isNaN(promptLength)) {
    alert("A valid number was not provided. Please try again!");
    return generatePassword();
  } else if (promptLength < 8 || promptLength > 128) {
    alert(
      "You must select a length between 8-128 characters. Please try again!"
    );
    return generatePassword();
  } else {
    charType();
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
