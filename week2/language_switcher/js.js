
"use strict";

const texts = {
  select: [
    { text: "UDSKIFTES", location: ".site-title" },
    { text: "UDSKIFTES", location: ".footer" },
  ],
  de: [
    { text: "Das Bot", location: ".site-title" },
    { text: "Das Ro-Bot", location: ".footer" },
  ],
  da: [
    { text: "Båden", location: ".site-title" },
    { text: "Robotten", location: ".footer" },
  ],
};

const locale = "da";

function setLanguage(lang) {
  texts[lang].forEach(({ text, location }) => {
    document.querySelector(location).textContent = text;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("drop_down");

  // apply the initial locale
  setLanguage(locale);
  select.value = locale;

  // when dropdown changes, update locale
  select.addEventListener("change", () => {
    setLanguage(select.value);
  });
});
