function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

export function burgerClicked() {
  if (document.querySelector(".burger")) {
    document.querySelector(".burger").addEventListener("click", function () {
      document.querySelector(".nav").classList.toggle("nav_open");
      document.querySelector(".header").classList.toggle("header_open");
    });
  }
}

export const cardsLoader = () => {
  let btn = document.querySelector(".btn_load").classList.add("btn_load-hold");
  let cardsContainer = document.querySelector(".cards__card-block");
  let cards = document.querySelectorAll(".card");
  let lastId = cards[cards.length - 1].id;
  fetch(`https://jsonplaceholder.typicode.com/posts?_start=${lastId}&_limit=6`)
    .then((res) => res.json())
    .then((res) => cardMaker(res))
    .catch((err) => console.log(err.message));
  const cardMaker = (data) => {
    data.map((item) => {
      let newCard = `
                <article id=${item.id} class="cards__card card">
                    <img class="card__img" src="img/jpg/card_10.jpeg" alt="Карточка">
                    <div class="card__article-block">
                        <h3 class="card__heading heading-three">forest</h3>
                        <span class="card__subtitle">${item.title}</span>
                        <p class="card__text">
                            ${item.body}
                        </p>
                        <span class="card__post-info">Posted by <b>Eugenia</b>, on July  24, 2019</span>
                        <a href="#" class="card__reading-link">Continue reading</a>
                    </div>
                </article>`;
      cardsContainer.insertAdjacentHTML("beforeend", newCard);
      document.querySelector(".btn_load").classList.remove("btn_load-hold");
    });
  };
};

export const closePopup = () => {
  document.querySelector(".popup").classList.remove("popup_open");
};

export const openPopup = () => {
  document.querySelector(".popup").classList.add("popup_open");
  if (document.querySelector(".header").classList.contains("header_open")) {
    document.querySelector(".header").classList.toggle("header_open");
    document.querySelector(".nav").classList.toggle("nav_open");
  }
};

export const formValidation = (e) => {
  e.preventDefault();
  const form = document.forms.form;
  const setError = (input, message) => {
    input.classList.add("invalid");
    input.classList.remove("valid");
    let label = input.parentElement;
    let error = label.querySelector(".error");
    error.style.display = "inline-block";
    error.innerText = message;
  };
  const setSuccess = (input) => {
    input.classList.add("valid");
    input.classList.remove("invalid");
    let label = input.parentElement;
    let error = label.querySelector(".error");
    error.innerText = "";
    error.style.display = "none";
  };
  const isValid = () => {};

  if (form.elements.name.value !== "" && form.elements.name.value.length > 2) {
    setSuccess(form.elements.name);
  } else {
    setError(form.elements.name, "Некорректное имя");
  }
  let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (
    form.elements.email.value !== "" &&
    emailReg.test(form.elements.email.value)
  ) {
    setSuccess(form.elements.email);
  } else {
    setError(form.elements.email, "Некорректный e-mail");
  }
  if (
    form.elements.phone.value !== "" &&
    form.elements.phone.value.length === 16
  ) {
    setSuccess(form.elements.phone);
  } else {
    setError(form.elements.phone, "Некорректный номер");
  }
  if (form.elements.apply.value !== "") {
    setSuccess(form.elements.apply);
  } else {
    setError(form.elements.apply, "Некорректный отзыв");
  }
};
