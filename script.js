// Translation toggle
const translateBtn = document.getElementById("translate-btn");
const mainGreeting = document.getElementById("main-greeting");
const subGreeting = document.getElementById("sub-greeting");

let isMarathi = false;

const translations = {
  english: {
    mainGreeting: "Happy Diwali!",
    subGreeting: "May this Diwali bring joy, prosperity, and happiness to your life."
  },
  marathi: {
    mainGreeting: "दीपावलीच्या हार्दिक शुभेच्छा!",
    subGreeting: "ही दिवाळी आपल्या जीवनात आनंद, समृद्धी आणि सुख घेऊन येवो."
  }
};

translateBtn.addEventListener("click", () => {
  if (isMarathi) {
    mainGreeting.textContent = translations.english.mainGreeting;
    subGreeting.textContent = translations.english.subGreeting;
    translateBtn.textContent = "Translate to Marathi";
  } else {
    mainGreeting.textContent = translations.marathi.mainGreeting;
    subGreeting.textContent = translations.marathi.subGreeting;
    translateBtn.textContent = "Translate to English";
  }
  isMarathi = !isMarathi;
});
