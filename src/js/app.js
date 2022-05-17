import * as functions from "./modules/functions.js";

window.onload = function () {
  functions.burgerClicked();

  document
    .querySelector(".btn_load")
    .addEventListener("click", functions.cardsLoader);
  document
    .querySelector(".popup__close-btn")
    .addEventListener("click", functions.closePopup);
  document
    .querySelectorAll(".apply-btn")
    .forEach((item) => item.addEventListener("click", functions.openPopup));
};
