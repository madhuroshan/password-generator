// Generate a random password
function generatePassword() {
  const length = document.getElementById("passwordLength").value;
  const includeSpecialChars = document.getElementById(
    "includeSpecialChars"
  ).checked;
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialChars = "!@#$%^&*()_+{}[]~-=`|\\:;\"'<>,.?/";
  const numberChars = "0123456789";

  let password = "";
  let allowedChars = lowercaseChars;

  if (includeSpecialChars) {
    allowedChars += specialChars;
  }
  if (includeUppercase) {
    allowedChars += uppercaseChars;
  }
  if (includeNumbers) {
    allowedChars += numberChars;
  }

  const passwordInput = document.getElementById("password");
  passwordInput.value = ""; // Clear the input field

  let index = 0;
  function generateCharacter() {
    if (index < length) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      const char = allowedChars.charAt(randomIndex);
      password += char;
      passwordInput.value = password;
      index++;
      setTimeout(generateCharacter, 300); // Delay of 0.5 seconds (500 milliseconds)
    }
  }

  generateCharacter();
}

// Copy the generated password to the clipboard
function copyToClipboard() {
  const passwordInput = document.getElementById("password");
  passwordInput.select();
  passwordInput.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
