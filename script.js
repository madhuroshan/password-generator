let length = document.getElementById("passwordLength");

document.getElementById("passwordLengthValue").textContent = length.value;

document.getElementById("passwordLength").addEventListener("change", () => {
  document.getElementById("passwordLengthValue").textContent = length.value;
});

function generatePassword() {
  const includeSpecialChars = document.getElementById(
    "includeSpecialChars"
  ).checked;
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;

  // Rest of the code for generating the password

  let password = "";
  let allowedChars = "abcdefghijklmnopqrstuvwxyz";

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialChars = "!@#$%^&*()_+{}[]~-=`|\\:;\"'<>,.?/";
  const numberChars = "0123456789";

  if (includeSpecialChars) {
    allowedChars += specialChars;
  }
  if (includeUppercase) {
    allowedChars += uppercaseChars;
  }
  if (includeNumbers) {
    allowedChars += numberChars;
  }

  for (let i = 0; i < length.value; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars.charAt(randomIndex);
  }

  document.getElementById("password").value = password;
}

function copyToClipboard() {
  const passwordInput = document.getElementById("password");
  passwordInput.select();
  passwordInput.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
}
