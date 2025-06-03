console.clear();

const input = document.querySelector("[data-js=first-input]");
const button = document.querySelector("[data-js=button-uppercase]");

button.addEventListener("click", () => {
  //   input.textContent = input.value.toUppercase();
  input.value = input.value.toUpperCase();
});
