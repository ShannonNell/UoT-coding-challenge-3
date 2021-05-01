// Click 'generate password' to prompt password criteria
  // - on click window prompt pops up
    // - 
  // - password criteria
    // - prompt length of password between 8 - 128 characters
    // - prompt what character types: lowercase
      // - uppercase
      // - numeric
      // - special characters
    // - when each prompt is answered, input should be validated and at least one char type selected
    // - when all prompts are answered, password is generated
    // - when password is generated, it displays as alert or written on page


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
