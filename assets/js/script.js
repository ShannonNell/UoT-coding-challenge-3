



// VARIABLES
//Arrays
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = [1,2,3,4,5,6,7,8,9,0];
var specialChars = ['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',':','<','=','>','?','@','[',']','^','_','`','{','}','|','~'];

// declarations
var length = ""; // IDK about this one
var confirmLower;
var confirmUpper;
var confirmNumeric;
var confirmSpecial;

// Generate password function
  function generatePassword() {

    // prompt to find out length of password
    var passLengthInput = window.prompt( "How long would you like your password to be? Choose a number between 8 and 128 characters.");
    //if do NOT enter a valid number; this way don't need an else statement; LOOP
    if (passLengthInput <8 || passLengthInput >128) {
      window.alert("You need to choose a number greater than 8 and less than 128.");
      generatePassword();
    }
    var passLength = passLengthInput; //do I want a parseINt here?
    console.log(passLength);
    
    // determine what characters the user wants to include
    var confirmLower = window.confirm("Would you like to include lowercase letters in your password? Click 'OK' for yes, 'CANCEL' for no.");
    var confirmUpper = window.confirm("Would you like to include UPPERCASE letters in your password? Click 'OK' for yes, 'CANCEL' for no.");
    var confirmNumeric = window.confirm("Would you like to include NUMERIC values in your password? Click 'OK' for yes, 'CANCEL' for no.");
    var confirmSpecial = window.confirm("Would you like to include special characters (ex. *!%$) in your password? Click 'OK' for yes, 'CANCEL' for no.");

    // new variable that will assign action to the password parameters
    var passChars = [];

    // if user confirms the above characters
    if (confirmLower) {
      //If confirmLower is true, then the passChars variable will include/add or equal the lowerCase variables
      passChars += lowerCase;
    }
    if (confirmUpper) {
      passChars += upperCase; 
    }
    if (confirmNumeric) {
      passChars += numeric;
    }
    if (confirmSpecial) {
      passChars += specialChars;
    }
  }

    

    // generator functions to get random character//still need to fix
    // get RandomLower function
    function getRandomLower() {
        return lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    
    // get RandomLower function
    function getRandomUpper() {
        return upperCase[Math.floor(Math.random() * upperCase.length)];
    }
    
    // get RandomNumeric function
    function getRandomNumeric() {
        return numeric[Math.floor(Math.random() * numeric.length)];
    }
    
    // get RandomSpecial function
    function getRandomSpecial() {
        return specialChars[Math.floor(Math.random() * specialChars.length)];
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
    



    generatePassword();