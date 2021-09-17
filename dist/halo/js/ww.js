const pwOverlay = document.querySelector(".pw-overlay");
const pwInput = document.querySelector(".pw-input");
const pwCheckbox = document.querySelector(".pw-checkbox");
const pwButton = document.querySelector(".pwButton");
const errorMessage = document.querySelector(".pwerror");



//to get input hashed for checking

let ogPw = "6D53ECF702E9767A0F4176C15DC7158CD04C2926B3F19011B9C8F6A1B3109308";
ogPw = ogPw.toLowerCase();


async function sha256(str) {
  // Get the string as arraybuffer.
  var buffer = new TextEncoder("utf-8").encode(str)
  const hash = await crypto.subtle.digest("SHA-256", buffer);
  return hex(hash);
}

function hex(buffer) {
  var digest = ''
  var view = new DataView(buffer)
  for(var i = 0; i < view.byteLength; i += 4) {
    // We use getUint32 to reduce the number of iterations (notice the `i += 4`)
    var value = view.getUint32(i)
    // toString(16) will transform the integer into the corresponding hex string
    // but will remove any initial "0"
    var stringValue = value.toString(16)
    // One Uint32 element is 4 bytes or 8 hex chars (it would also work with 4
    // chars for Uint16 and 2 chars for Uint8)
    var padding = '00000000'
    var paddedValue = (padding + stringValue).slice(-padding.length)
    digest += paddedValue
  }
  
  return digest
}

//let enter click the button
pwInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    pwButton.click();
  }
});

pwButton.addEventListener("click", () => {
  
  let pw = pwInput.value;
  console.log(pw);
  sha256(pw).then(function(digest) {
    console.log(digest);
    console.log(ogPw);

    if (digest === ogPw) {  
      if(pwCheckbox.checked) {
        localStorage.setItem("pwHaloCorrect-Oct2021", "true");
      }
      pwOverlay.classList.remove("on");
      
    } else {
      //show error message
      errorMessage.classList.remove("hidden");
    }

  })
  

});

setTimeout(() => {
  if (!localStorage.getItem("pwHaloCorrect-Oct2021")) {
    pwOverlay.classList.add("on");
  }
}, 100);


