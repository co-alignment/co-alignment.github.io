const cookieContainer = document.querySelector(".cookie-banner");
const cookieButton = document.querySelector(".cookie-button");

cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true");
  });
  
  setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed")) {
      cookieContainer.classList.add("active");
    }
  }, 2000);