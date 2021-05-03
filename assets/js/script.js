/*don't know if I need this anymore
// declarations
var length = "";
var confirmLower;
var confirmUpper;
var confirmNumeric;
var confirmSpecial;
*/

// Password length function
function passLength() {
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
function passChars() {
  var charChoice = "";

  //Arrays
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numeric = [1,2,3,4,5,6,7,8,9,0];
  var specialChars = ['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',':','<','=','>','?','@','[',']','^','_','`','{','}','|','~'];

  //lower case
  var confirmLower = window.confirm("Would you like to include lowercase letters in your password? Click 'OK' for yes, 'CANCEL' for no.");
  // if confirmLower is true, then the passChars variable will include/add or equal the lowerCase variables
  if(confirmLower) {
    charChoice += lowerCase;
  };

  //UPPER case
  var confirmUpper = window.confirm("Would you like to include UPPERCASE letters in your password? Click 'OK' for yes, 'CANCEL' for no.");
  if (confirmUpper) {
    charChoice += upperCase; 
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
  return charChoice;
}


// I have function to determine length
// function to determine what characters to use
// now need function to create password when all the prompts have been completed
  // - make the characters chosen be random and loop through the randomness
  // - also need to make sure passChar will follow passLength
// function to generate the actual password
function generatePassword() {
  // to generate the password, my password length will equal the passwordLength() as determined from above
  var length = passLength();
  // characters chosen as determined from above
  var characters = passChars();
  // password where values will be inserted
  var password = "";
  
  // log to check those two values are what was selected 
  console.log(length);
  console.log(characters);

  // for loop to choose password
  for (var i = 0; i < length; i++) {
    // password (+characters) is equal to the result of randomizing the character selection until we reach the length of password
    password += characters.charAt(Math.floor(Math.random() * i));
  }
  console.log(password);
  return password
}

    
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