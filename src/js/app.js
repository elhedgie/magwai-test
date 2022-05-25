import * as functions from "./modules/functions.js";
import IMask from "imask";
import Swiper, { Navigation, Pagination } from "swiper";

window.onload = function () {
  functions.burgerClicked();
  document.forms.form.addEventListener("submit", functions.formValidation);
  document
    .querySelector(".btn_load")
    .addEventListener("click", functions.cardsLoader);
  document
    .querySelector(".popup__close-btn")
    .addEventListener("click", functions.closePopup);
  document
    .querySelectorAll(".apply-btn")
    .forEach((item) => item.addEventListener("click", functions.openPopup));
  // imask
  var element = document.getElementById("phone");
  var maskOptions = {
    mask: "+{7}(000)000-00-00",
  };
  var mask = IMask(element, maskOptions);
  //swiper
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      bulletClass: "slider__link",
      clickable: true,
      renderBullet: function (index) {
        let arr = ["DOGIE COIN", "УПАЛ", "ВОЗВРАЩЕНИЕ"];
        return `<a href="#" class="slider__link">${arr[index]}</a>`;
      },
    },
    slidesPerView: 1,
  });
};
//
