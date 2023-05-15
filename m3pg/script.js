// Assignment code here
var upperCase= "ABCDEFGHIJKLM";
var lowerCase= "abcdefghijklm";
var special= "!@#$%^&()?";
var number= "123456789";
var passwordLenght = 10;




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordChoices = ""
  var finalpassword = ""
  var passwordLenght = prompt('how many characters?')
  console.log(passwordLenght);
  if (passwordLenght > 8 && passwordLenght < 128) {
    // console.log('success');

    var upperCasechioce = confirm('Would you like uppercase characters?');
    // console.log(upperCasechioce);

    var lowerCasechioce = confirm('Would you like lowercase characters?');

    var specialchioce = confirm('Would you like special characters?');
    
    var numberchioce = confirm('Would you like numbers?');
    
    if (upperCasechioce === true) {
      passwordChoices += upperCase
    } 

    if (lowerCasechioce === true) {
      passwordChoices += lowerCase
    } 

    if (specialchioce === true) {
      passwordChoices += special
    } 

    if (numberchioce === true) {
      passwordChoices += number
    } 
    // console.log(passwordChoices);
    for (var i = 0; i < passwordLenght; i++){
      finalpassword += passwordChoices[Math.floor(Math.random() * passwordChoices.length)]
      
    } 
    // console.log(finalpassword);
    return finalpassword;
  }
  else {
    alert('please try again!')
  }
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



