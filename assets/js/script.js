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

  //Password parameters
  var confirmLower = window.confirm("Would you like to include lowercase letters in your password? Click 'OK' for yes, 'CANCEL' for no.");
  var confirmUpper = window.confirm("Would you like to include UPPERCASE letters in your password? Click 'OK' for yes, 'CANCEL' for no.");
  var confirmNumeric = window.confirm("Would you like to include NUMERIC values in your password? Click 'OK' for yes, 'CANCEL' for no.");
  var confirmSpecial = window.confirm("Would you like to include special characters (ex. *!%$) in your password? Click 'OK' for yes, 'CANCEL' for no.");

  // loop if user selects none of the options
  while(confirmLower === false && confirmUpper === false && confirmNumeric === false && confirmSpecial === false) {
    window.alert("You need to select at least one character type.");
    var confirmLower = window.confirm("Would you like to include lowercase letters in your password? Click 'OK' for yes, 'CANCEL' for no.");
    var confirmUpper = window.confirm("Would you like to include UPPERCASE letters in your password? Click 'OK' for yes, 'CANCEL' for no.");
    var confirmNumeric = window.confirm("Would you like to include NUMERIC values in your password? Click 'OK' for yes, 'CANCEL' for no.");
    var confirmSpecial = window.confirm("Would you like to include special characters (ex. *!%$) in your password? Click 'OK' for yes, 'CANCEL' for no.");
  }

  //if user selects characters
  if(confirmLower) {
    charChoice += lowerCase;
  }

  if (confirmUpper) {
    charChoice += upperCase; 
  }

  if (confirmNumeric) {
    charChoice += numeric;
  }

  if (confirmSpecial) {
    charChoice += specialChars;
  }

  // list of all the characters the user has decided to include in their password
  console.log(charChoice);
  return charChoice;
};

// function to generate the actual password
var generatePassword = function() {
  // to generate the password, my password length will equal the passwordLength() as determined from above
  var length = passLength();
  // characters chosen as determined from above
  var characters = passChars();
  var charLength = characters.length;
  // password where values will be inserted
  var password = [];
  
  //loop through characters chosen until we reach the length the user has chosen for their password
  for (var i = 0; i < length; i++) {
    password.push(characters.charAt(Math.floor(Math.random() * charLength)));
  }
  // return the password!
  console.log(password);
  //.join returns my password as a string
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
