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
