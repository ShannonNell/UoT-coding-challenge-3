// Click 'generate password' to prompt password criteria
  // - on start prompt pops up
  // - √password criteria
    // - √prompt length of password between 8 - 128 characters
    // - √prompt what character types: lowercase
      // - √uppercase
      // - √numeric
      // - √special characters
    // - when each prompt is answered, input should be validated and at least one char type selected
    // - when all prompts are answered, password is generated
    // - when password is generated, it displays as alert or written on page 


// VARIABLES
// Arrays of all possible selected inputs
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = [1,2,3,4,5,6,7,8,9,0];
var specialChars = ['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',':','<','=','>','?','@','[',']','^','_','`','{','}','|','~']

//FUNCITONS
function passwordQuestions() {
  // ask user how long they'd like their password to be
  var passwordLength = window.prompt(
    "How long would you like your password to be? Choose a number between 8 and 128 characters."
  );
  //if enter a valid number
  if (passwordLength >= 8 && passwordLength <=128) {
    console.log("Password length is " + passwordLength + " characters long.");

    //proceed to lowercase question
    var lowerCase = window.confirm(
      "Would you like to include lowercase letters in your password? Click 'OK' for yes, 'CANCEL' for no."
    );
    //if lowerCase === true, include in password
    if (lowerCase) {
      console.log("Lower case values WILL be included in password.");
    }
    else {
      console.log("Lower case values will NOT be included in password.");
    };

    //proceed to UPPERCASE question
    var upperCase = window.confirm(
      "Would you like to include UPPERCASE letters in your password? Click 'OK' for yes, 'CANCEL' for no."
    )
    if (upperCase) {
      console.log("UPPERCASE values WILL be included in password.");
    } 
    else {
      console.log("UPPERCASE vallues will NOT be included in password.");
    };

    //proceed to NUMERIC question
    var numeric = window.confirm(
      "Would you like to include NUMERIC values in your password? Click 'OK' for yes, 'CANCEL' for no."
    );
    if (numeric) {
      console.log("Numeric values WILL be included in password.");
    }
    else {
      console.log("Numeric values will NOT be included in password.");
    };

    //proceed to SPECIAL CHARACTERS question
    var specialChars = window.confirm(
      "Would you like to include special characters (ex. *!%$) in your password? Click 'OK' for yes, 'CANCEL' for no."
    )
    if (specialChars) {
      console.log("Special characters WILL be included in password.");
    }
    else {
      console.log("Special characters will NOT be included in password.");
    }
  } else {
    window.alert("You need to choose a number greater than 8 and less than 128.");
    passwordQuestions();  
  }
}

// Need to generate random letter for lowerCase selection, UPPERcase selection, numeric, and special char that can be input into generatePassword eventuality
// random letter lowercase
function generateRandomLowerCase() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
console.log(generateRandomLowerCase());

//random letter UPPER case
function generateRandomUpperCase() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}
console.log(generateRandomUpperCase());

//random Numeric
function generateRandomNumeric() {
  return numeric[Math.floor(Math.random() * numeric.length)];
}
console.log(generateRandomNumeric());

//random Special character
function generateRandomSpecialChars() {
  return specialChars[Math.floor(Math.random() * specialChars.length)];
}
console.log(generateRandomSpecialChars());




/* random who knows what this is stuff:
// once the prompts have been completed, need to be able to click the 'generate password' button and have it actually do something
function generatePassword() {
  // need the password length to be the number of characters outputted
  console.log(passwordLength);
}

// for loop to loop through each letter of lowercase alphabet
function randomNumber() {
  for (var i = 0; i < lowerCase.length; i++) {
    lowerCase = Math.floor(Math.random() * 27);
    console.log(lowerCase[i]);
  }
}

// RUN PASSWORD GENERATOR
passwordQuestions();

//Math.floor(Math.random() * 10);
//  var lowerCase = lowerCase[i];


/* JS for actual clicking and deploying of password */
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
