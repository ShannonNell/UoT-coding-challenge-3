// Password length function
var passLength = function() {
  // prompt to find out length of password
  passLengthInput = window.prompt( "How long would you like your password to be? Choose a number between 8 and 128 characters.");
  //if valid number
  if (passLengthInput >=8 && passLengthInput <=128) {
    console.log(passLengthInput);
  } 
  else {
    window.alert("You need to choose a number greater than 8 and less than 128.");
    passLength();
  }
  return passLengthInput;
}

// passChar function to determine what characters the user wants to include
var passChars = function() {
  var charChoice = "";

  //Arrays
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "1234567890";
  var specialChars = "!#$%&()*+,-./:;<=>?@[]^_`{}|~";

  //lower case
  var confirmLower = window.confirm("Would you like to include lowercase letters in your password? Click 'OK' for yes, 'CANCEL' for no.");
  // if confirmLower is true, then the passChars variable will include/add or equal the lowerCase variables
  if(confirmLower) {
    charChoice += lowerCase;
    console.log(charChoice);
  };

  //UPPER case
  var confirmUpper = window.confirm("Would you like to include UPPERCASE letters in your password? Click 'OK' for yes, 'CANCEL' for no.");
  if (confirmUpper) {
    charChoice += upperCase; 
    console.log(charChoice);
  };

  // Numeric
  var confirmNumeric = window.confirm("Would you like to include NUMERIC values in your password? Click 'OK' for yes, 'CANCEL' for no.");
  if (confirmNumeric) {
    charChoice += numeric;
  };

  // Special Characters
  var confirmSpecial = window.confirm("Would you like to include special characters (ex. *!%$) in your password? Click 'OK' for yes, 'CANCEL' for no.");
  if (confirmSpecial) {
    charChoice += specialChars;
  };

  // if user selects none of the options
  if (charChoice === "") {
    window.alert("You need to select at least one character type.");
    passChars();
  }
  // this will return the entire list of all the characters the user has decided to include in their password
  console.log(charChoice);
  return charChoice;
};

// function to generate the actual password
var generatePassword = function() {
  var length = passLength();
  var characters = passChars();
  var charLength = characters.length;
  var password = [];
  
  //loop through characters chosen until we reach the length the user has chosen for their password
  for (var i = 0; i < length; i++) {
    password.push(characters.charAt(Math.floor(Math.random() * charLength)));
  }
  // return the password!
  console.log(password);
  return password.join('');
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
