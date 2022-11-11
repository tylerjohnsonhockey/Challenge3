// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function randomInt(min,max) {
  if(!max) {
    max=min
    min=0
  }
  var rand=Math.random()
  return Math.floor(min*(1-rand)+rand*max)
}

function generatePassword() {

  while (true) {
  var userInput=window.prompt("Enter password length.")
  var passLength=parseInt(userInput)
  if (isNaN(passLength)) {
    window.alert("Please enter a number!")
    return
  }
  else if (passLength<8||passLength>128) {
    window.alert("Password must be between 8 and 128 characters long.")
  }
  else {
    break
  }
}

  var lowerLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppperLetters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var numbers=["0","1","2","3","4","5","6","7","8","9","10"]
  var symbols=["!","@","#","$","%","^","&","*"]
  var userUpperLetters=window.confirm("Include upper case letters in your password?")
  var userLowerLetters=window.confirm("Include lower case letters in your password?")
  var userNumbers=window.confirm("Include numbers in your password?")
  var userSymbols=("Include special characters in your password?")
  var options=[]

  if (userLowerLetters===true) {
    options.push(lowerLetters)
  }

  if (userUpperLetters===true) {
    options.push(uppperLetters)
  }

  if (userNumbers===true) {
    options.push(numbers)
  } 

  if (userSymbols===true) {
    options.push(symbols)
  }

  if (options.length===0) {
    options.push(lowerLetters)
  }

  var generatedPassword = ""

  for (var i=0;i<passLength;i++) {
    var randomList=randomItem(options)
    var randomChar=randomItem(randomList)
    generatedPassword+=randomChar
  }

  return generatedPassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
