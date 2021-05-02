// Click 'generate password' to prompt password criteria
  // - on click window prompt pops up
  // - password criteria
    // - prompt length of password between 8 - 128 characters
    // - prompt what character types: lowercase
      // - uppercase
      // - numeric
      // - special characters
    // - when each prompt is answered, input should be validated and at least one char type selected
    // - when all prompts are answered, password is generated
    // - when password is generated, it displays as alert or written on page 


/* ON GENERATE PASSWORD CLICK */
// Window prompts asking
  // - What length would you like your password to be (between 8 and 128 characters)?
  // - Would you like to include uppercase letters? 
  // - Would you like to include lowercase letters?
  // - Would you like to inlude numeric values?
  // - Would you like to include special characters (ex. !, *, $)?

/* WHAT DO WE NEED TO CREATE A PASSWORD? */
// VARIABLES
// password length 8-128 chars

// lowercase entries -- do I need to write the whole alphabet in lowercase vs uppercase?
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// uppercase entries
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// numeric entries -- do these numbers need to be a string?
var numeric = [1,2,3,4,5,6,7,8,9,0];

// special characters -- do I include space OR / OR ' as a special char?
var specialChars = ['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',':','<','=','>','?','@','[',']','^','_','`','{','}','|','~']

//FUNCITONS
function password() {
  // ask user how long they'd like their password to be
  var passwordLength = window.prompt(
    "How long would you like your password to be? Choose a number between 8 and 128 characters."
  );
  //if enter a valid number
  if (passwordLength >= 8 && passwordLength <=128) {
    console.log("Password length is " + passwordLength + " letters long.");

    //proceed to next question
    var lowerCase = window.confirm(
      "Would you like to include lowercase letters in your password? Click 'OK' for yes, 'CANCEL' for no."
    );
    //if lowerCase === true, include in password
    if (lowerCase) {
      console.log("Lower case values WILL be included in password.");
    }
    else {
      console.log("Lower case values will NOT be included in password.");
    }

  } else {
    window.alert("You need to choose a number greater than 8 and less than 128.");
    password();  
    return false;
  }
}
  
password();


/*
function password() {
  //if user inputs a length between 8 and 128 chars
}
if (passwordLength >= 8 || =< 128);
*/


// VALIDATE -- using if statements-- within a function?
  // IF user inputs password length {length is true, so include in password};
    // ELSE {prompt user that they need a password length of at least 8 characters, then run prompt again};

  // IF user would like to include uppercase letters (var upperCase === true), {include upperCase options in password};
    // ELSE {do not include upperCase options in password}

  // IF user would like to include lowercase letters (var lowerCase === true), {include lowerCase options in password};
    // ELSE {do not include lowerCase options in password}
    // ELSE IF??

  // IF user would like to include numeric values (var numeric === true), {include numeric options in password};
    // ELSE {do not include numeric options in password}

  // IF user would like to include special characters (var specialChars === true), {include special characters in password};
    // ELSE {do not include special characters in password}




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
