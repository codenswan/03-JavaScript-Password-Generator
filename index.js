// this code adds alerts when the user doesn't correctly set password requirements. Red highlights and an alert message box. It is triggered by the button event.
function generatePassword() {
  
  let length = document.getElementById("length").value;
  if (length < 8 || length > 40) {
    document.getElementById("length").classList.add("alert-danger");
    document.getElementById("lengthError").innerHTML =
      "must be between 8 and 40";
    alert("must be between 8 and 40");
  } else {
    document.getElementById("length").classList.remove("alert-danger");
    document.getElementById("lengthError").innerHTML = "";
  }

  let lower = document.getElementById("lower").checked;
  let upper = document.getElementById("upper").checked;
  let number = document.getElementById("numeric").checked;
  let symbol = document.getElementById("special").checked;
  if (lower || upper || numeric || special) {
    document.getElementById("characters").classList.remove("alert-danger");
  } else {
    document.getElementById("characters").classList.add("alert-danger");
    alert(
      "You must select at least one of the options - Lowercase, Uppercase, Numeric, Specail"
    );
  }
let options = (lower ? 1 : 0) + (upper ? 1 : 0) + (numeric ? 1 :0) + (special ? 1 : 0);

  let generatedPassword = "";
  for (let count = 0; count < length; count+=options) {
    //get rand 1 - num selections
    if(lower)
    generatedPassword += getRandomLower();
    if(upper)
    generatedPassword += getRandomUpper();
    if(number)
    generatedPassword += getRandomNumber();
    if(symbol)
    generatedPassword += getRandomSymbol();

  }

  
  document.getElementById("password").value = shuffleArray(generatedPassword);
  
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
  
}

//THIS generates random characters using return String.fromCharCode(Math.floor(Math.random() which accesses char codes listed here http://www.net-comber.com/charset.html
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  //   const numbers = "123456789";
  //   return numbers[Math.floor(Math.random() * numbers.length)]
}

function getRandomSymbol() {
  const symbols = "@#$%^&*!(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

