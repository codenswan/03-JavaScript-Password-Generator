//(NOT THIS ONE) create array for each option (there will be 3 arrays - alpha, numeric, symbols):
//THIS ONE) generate random number using return String.fromCharCode(Math.floor(Math.random() which accesses char codes listed here http://www.net-comber.com/charset.html
//if lower - choose random letter - toLowerCase(), if upper - choose random letter - toUpperCase()
// Array.apply(undefined, Array(26)).map(function(x,y) { return String.fromCharCode(y + 65); }).join('');

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "@#$%^&*!(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());

// let alphaArray = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let symbolArray = ["!", "#", "$", "%", "&", "@", "{"];

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
    alert("You must select at least one of the options - Lowercase, Uppercase, Numeric, Specail");
  }
}