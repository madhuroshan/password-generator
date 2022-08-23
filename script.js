let passwordLengthInput = document.querySelector(".password-length");
let passwordLength = passwordLengthInput.min;
passwordLengthInput.addEventListener(
  "input",
  () => (passwordLength = passwordLengthInput.value)
);

const generateButton = document.querySelector(".generate-button");
let passwordField = document.querySelector(".password-field");
const characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "`",
  "~",
  "/",
  "?",
  "<",
  ">",
  ",",
  ".",
  "\\",
  "|",
  "{",
  "}",
  "[",
  "]",
];

function passwordGenerator(length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters[Math.trunc(Math.random() * 80)];
  }
  return password;
}

generateButton.addEventListener("click", function () {
  passwordField.textContent = passwordGenerator(passwordLength);
});
