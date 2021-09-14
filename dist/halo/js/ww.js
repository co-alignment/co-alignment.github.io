const pwOverlay = document.querySelector(".pw-overlay");
const pwInput = document.querySelector(".pw-input");
const pwCheckbox = document.querySelector(".pw-checkbox");
const crypto = require('crypto');

//to retreive all hashes
hashes= crypto.getHashes();

//to get input hashed for checking
pw = pwInput.value;
hashPw = crypto.createHash('sha256WithRSAEncryption').update(x).digest('hex');

//I used the word "on" to make the overlay visible
// Old code for reference
cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true");
  });
  
  setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed")) {
      cookieContainer.classList.add("active");
    }
  }, 2000);