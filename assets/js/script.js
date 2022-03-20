// Global Variables
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Possible Character Options and Corresponding Questions
var charOptions = [
  {
    option: "abcdefghijklmnopqrstuvwxyz",
    question: "Would you like your password to include Lowercase Characters?",
  },
  {
    option: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    question: "Would you like your password to include Uppercase Characters?",
  },
  {
    option: "0123456789",
    question: "Would you like your password to include Numbers?",
  },
  {
    option: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
    question: "Would you like your password to include Special Characters?",
  },
];

// Function to generate random password from Character Types selected
function getRandomPassword(options, passLength) {
  var passwordValue = "";

  for (var i = 0; i < passLength; i++) {
    passwordValue += options.charAt(
      Math.floor(Math.random() * (options.length - 1))
    );
  }

  return passwordValue;
}

// Function to loop through the possible character options
function getPasswordOptions() {
  var passwordOption = "";

  for (var i = 0; i < charOptions.length; i++) {
    var promptQues = prompt(
      `${charOptions[i].question} Enter Y for Yes or N for No`
    );

    switch (promptQues.toLowerCase()) {
      case "y":
        passwordOption += charOptions[i].option;
        break;
      case "n":
        break;
      default:
        alert("You did not enter a valid option. Please try again!");
        i--;
        break;
    }
  }

  return passwordOption;
}

// Function to ask user for desired password criteria and generate password with desired length
function charType(passLength) {
  var passwordOptions = "";

  // Ask user for desired password criteria
  while (!passwordOptions) {
    passwordOptions = getPasswordOptions();

    // Validation to ensure at least one character type is selected
    if (!passwordOptions) {
      alert(
        "You must select one character type to include (lowercase, uppercase, numeric, and/or special characters. Please try again!"
      );
    }
  }

  // Generate password with desired length
  var finalPassword = getRandomPassword(passwordOptions, passLength);

  return finalPassword;
}

// Function to start the password generation flow
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
    // Calls function to ask user for password criteria and generates password
    passwordResult = charType(promptLength);
  }

  return passwordResult;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Displays Password Value on Screen
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
