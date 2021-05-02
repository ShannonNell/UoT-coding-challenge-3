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


    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var numeric = [1,2,3,4,5,6,7,8,9,0];
    var specialChars = ['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',':','<','=','>','?','@','[',']','^','_','`','{','}','|','~'];
    
    // generator functions to get random character
    // get RandomLower function
    function getRandomLower() {
        return lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    console.log(getRandomLower());
    
    // get RandomLower function
    function getRandomUpper() {
        return upperCase[Math.floor(Math.random() * upperCase.length)];
    }
    console.log(getRandomUpper());
    
    // get RandomNumeric function
    function getRandomNumeric() {
        return numeric[Math.floor(Math.random() * numeric.length)];
    }
    console.log(getRandomNumeric());
    
    // get RandomSpecial function
    function getRandomSpecial() {
        return specialChars[Math.floor(Math.random() * specialChars.length)];
    }
    console.log(getRandomSpecial());
    
    
    
    
    
    
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
    
    