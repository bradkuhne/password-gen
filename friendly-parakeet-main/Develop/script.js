// Assignment code here
//Setup list of special characters

const pwSpecialChars = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
console.log ("Number of special characters:", pwSpecialChars.length);
// Setup list of numbers
const pwNumbers = [1,2,3,4,5,6,7,8,9,0]
console.log ("Number of numbers:", pwNumbers.length);
// Setup list of lower case letters
const pwLCLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]
console.log ("first and thir lower case letters", pwLCLetters[0], pwLCLetters[2]);
// Setup list of upper case letters
const pwUCLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"]
console.log ("first and thir upper case letters", pwUCLetters[0], pwUCLetters[2]);

var charCount = 0;
var i = 0;



// prompted for the length of the password between 8 and 128 characters
function askCount() {
  var nbrChars = prompt("How many characters do you want to use for your password?  Pick a number between 8 and 128.");
  if (nbrChars != null) {
    if (nbrChars >= 8 & nbrChars <= 128){
      console.log ("entered number is valid:", nbrChars);
      charCount = nbrChars;
      askCase();
    }
    else {
      console.log ("entered number is NOT valid:", nbrChars);
      askCount();
    }
  }
  else {
    askCount();
  }
}
// promt for lower case yes or not
function askCase() {      
  var charLC = prompt("Which you like to use lowercase characters? Enter 1 for Yes or 2 for No.");
  console.log ("CharLC value is ", charLC);
  if(charLC == 1){
    console.log ("Lower case chosen.  Value is ", charLC);
    charLC = true;
    console.log (charLC, " Should be true");
      var charUC = prompt("Which you also like to use some uppercase characters? Enter 1 for Yes or 2 for No.");
      console.log ("CharUC value is ", charUC);
      if(charUC == 1){
        console.log ("Upper case is also chosen.  Value is ", charUC);
        charUC = true;
        console.log ("CharUC:", charUC, " Should be true"); 
         askNumeric();
      }
      if (charUC == 2) {
        console.log ("Upper case NOT chosen");
        charUC = false;
        console.log (charUC, "Should be false");
        askNumeric();
    }
  }
  if (charLC == 2) {
      console.log ("Lower case NOT chosen");
      charLC = false;
      charUC = true
      console.log ("CharLC: ", charLC, "Should be false");
      console.log ("CharUC: ", charUC, " Should be true");
      askNumeric();
  }
  else {
    console.log ("Lower/Upper case entered number is NOT valid:", charLC);
    askCase();
  }
}
// prompted for whether to include numerics or not
function askNumeric() {
  var numericYorN = prompt("Would you like to use some numerics? Enter 1 for Yes or 2 for No.");
  if ( numericYorN != null) {
    if (numericYorN == 1){
      console.log ("Numeric y or n entered number is valid:", numericYorN);
      numericYorN = true
      askSpChar();
    }
    if (numericYorN == 2){
      console.log ("Numeric y or n entered number is valid:", numericYorN);
      numericYorN = false;
      askSpChar();
    } else {
      console.log ("Numeric y or n entered number is NOT valid:", numericYorN);
      askNumeric();
    }
  }
  else {
    askNumeric();
  }
}
// prompted for whether to include special characters or not
function askSpChar() {
  var spCharYorN = prompt("Would you like to use some special characters? Enter 1 for Yes or 2 for No.");
  if ( spCharYorN != null) {
    if (spCharYorN == 1){
      console.log ("Special character entered number is valid:", spCharYorN);
      spCharYorN = true
      generatePassword();
    }
    if (spCharYorN == 2){
      console.log ("Special character entered number is valid:", spCharYorN);
      spCharYorN = false;
      generatePassword();
    } else {
      console.log ("Special character entered number is NOT valid:", spCharYorN);
      askSpChar();
    }
  }
  else {
    askSpChar();
  }
}
function generatePassword () {
  console.log ("value of i ", i);
  console.log ("value of charCount ", charCount );
  for (let i = 0; i < charCount; i++) {
     console.log ("Index of # of characters: ", i, " and number entered: ", charCount);
  }
     stopWithError();
}
// } 








// a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Start prompt sequence
askCount();



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
