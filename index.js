// This is the object for all the getRandom functions

const getRandomFunctions = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

//THIS ONE) generate random number using return String.fromCharCode(Math.floor(Math.random() which accesses char codes listed here http://www.net-comber.com/charset.html

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//

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

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());

// this code adds alerts when the user doesn't correctly set password requirements. Red highlights and an alert message box.
function generatePassword() {
  //   debugger;
  let length = document.getElementById("length").value;
  if (length < 8 || length > 128) {
    document.getElementById("length").classList.add("alert-danger");
    document.getElementById("lengthError").innerHTML =
      "must be between 8 and 128";
    alert("must be between 8 and 128");
  } else {
    document.getElementById("length").classList.remove("alert-danger");
    document.getElementById("lengthError").innerHTML = "";
  }

  let lower = document.getElementById("lower").checked;
  let upper = document.getElementById("upper").checked;
  let numeric = document.getElementById("numeric").checked;
  let special = document.getElementById("special").checked;
  if (lower || upper || numeric || special) {
    document.getElementById("characters").classList.remove("alert-danger");
  } else {
    document.getElementById("characters").classList.add("alert-danger");
    alert(
      "You must select at least one of the options - Lowercase, Uppercase, Numeric, Specail"
    );
  }
}
