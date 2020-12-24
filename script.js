// Character types declared for input checkboxes
var numericCheckEl = document.getElementById('numeric');
var lowerCheckEl = document.getElementById('lowerCaseLetters');
var upperCheckEl = document.getElementById('upperCaseLetters');
var specialCheckEl = document.getElementById('specialCharacters');

// Assignment code for Generate Password Button
var generateBtn = document.querySelector("#generate");

// Password function written to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Character type sets to be declared for password string
function generatePassword() {
  var result = '';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = 'abcderghijklmnopqrstuvwxyz';
  var numeric = '0123456789';
  var splChar = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
  var charString = '';
  var length = document.getElementById("charLength").value;

  console.log(length)
  
  // Parameter for character types needed to generate password
  if (!numericCheckEl.checked && !lowerCheckEl.checked && !upperCheckEl.checked && !specialCheckEl.checked) {
    return 'At least one character type is required.'
  }
  // Parameter for character length needed to generate password
  if (length < 8 || length > 128) {
    return 'Password character length requirement not met.'
  }
  // Character types are added to password string if checkboxes are checked 
  if (numericCheckEl.checked) {
    charString += numeric;
  }
  if (lowerCheckEl.checked) {
    charString += lowerCase;
  }
  if (upperCheckEl.checked) {
    charString += upperCase;
  }
  if (specialCheckEl.checked) {
    charString += splChar;
  }
  // Each character is randomly created and added to password until character length is met  
  for (var i = 0; i < length; i++) {
    result += charString.charAt(Math.floor(Math.random() * charString.length));
  }
  return result;
}