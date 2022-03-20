// Global Variables
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Possible Character Choices
var charChoices = [
  "abcdefghijklmnopqrstuvwxyz",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "0123456789",
  "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
];

// Corresponding Character Questions
var charQuestions = [
  "Would you like your password to include Lowercase Characters?",
  "Would you like your password to include Uppercase Characters?",
  "Would you like your password to include Numbers?",
  "Would you like your password to include Special Characters?",
];

function charType(len) {
  var passwordOptions = "";
  var passwordValue = "";
  for (var i = 0; i < charQuestions.length; i++) {
    var promptQues = prompt(`${charQuestions[i]} Enter Y for Yes or N for No`);

    switch (promptQues.toLowerCase()) {
      case "y":
        passwordOptions += charChoices[i];
        break;
      case "n":
        break;
      default:
        alert("You did not enter a valid option. Please try again!");
        i--;
        break;
    }
  }

  if (!passwordOptions) {
    alert(
      "You must select one character type to include (lowercase, uppercase, numeric, and/or special characters. Please try again!"
    );
    charType();
  } else {
    for (var i = 0; i < len; i++) {
      passwordValue += passwordOptions.charAt(
        Math.floor(Math.random() * (passwordOptions.length - 1))
      );
    }
  }

  return passwordValue;
}

function generatePassword() {
  // Ask user how long they would like the password to be
  var promptLength = prompt(
    "How long would you like your password to be? Must be between 8-128 characters"
  );

  // Check for Valid Answer
  if (!promptLength || isNaN(promptLength)) {
    alert("A valid number was not provided. Please try again!");
    return generatePassword();
  } else if (promptLength < 8 || promptLength > 128) {
    alert(
      "You must select a length between 8-128 characters. Please try again!"
    );
    return generatePassword();
  } else {
    passwordResult = charType(promptLength);
  }

  return passwordResult;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
