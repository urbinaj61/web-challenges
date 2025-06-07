console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

const renderStars = filledStars => {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  //Part one
  // for (let i = 1; i <= 5; i++) {
  //   const star = document.createElement("img");
  //   star.src = "./assets/star-empty.svg";
  //   starContainer.append(star);
  // }

  //part two
  // for (let i = 1; i <= 5; i++) {
  //   const star = document.createElement("img");

  //   i <= filledStars
  //     ? (star.src = "./assets/star-filled.svg")
  //     : (star.src = "./assets/star-empty.svg");

  //   starContainer.append(star);
  // }

  //part three

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("img");

    star.setAttribute("id", i);
    filledStars === !0
      ? i <= filledStars
        ? (star.src = "./assets/star-filled.svg")
        : (star.src = "./assets/star-empty.svg")
      : (star.src = "./assets/star-empty.svg");

    starContainer.append(star);

    star.addEventListener("click", () => {
      const index = Number(star.getAttribute("id"));
      console.log(index);
      renderStars(index);
    });
  }
};
renderStars(5);
