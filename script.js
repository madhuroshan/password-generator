let sizeInd = document.querySelector(".size");
let sizeInput = document.querySelector(".size-input");
sizeInd.textContent = sizeInput.value;
sizeInput.addEventListener("change", () => {
  sizeInd.textContent = sizeInput.value;
});

function generatePassword() {
  let includeNumbers = document.getElementById("numbers").checked;
  let includeSpecialChars = document.getElementById("spl-chars").checked;
  let includeUppercase = document.getElementById("upper-case").checked;

  //inclusion and exclusions of characters
  let characters = "abcdefghijklmnopqrstuvwxyz";
  if (includeNumbers) {
    characters += "0123456789";
  }

  if (includeUppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeSpecialChars) {
    characters += "!@#$%^&*()_+{}[]~-=`|\\:;\"'<>,.?/";
  }

  let password = "";

  const length = sizeInput.value;
  let i = 0;
  function generate() {
    if (i < length) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      document.querySelector(".password").textContent = password;
      i++;
    }
    setTimeout(generate, 150);
  }

  generate();
}

//Function to copy to clipboard

function copyToClipboard() {
  var range = document.createRange();
  range.selectNode(document.getElementById("password"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect
}

//attached event listeners to buttons
const generateBtn = document.querySelector(".generate-btn");
generateBtn.addEventListener("click", () => {
  generatePassword();
});

const copyBtn = document.querySelector(".copy-btn");
copyBtn.addEventListener("click", () => {
  copyToClipboard();
});
