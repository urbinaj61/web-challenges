console.clear();

const form = document.querySelector('[data-js="form"]');
const firstName = document.querySelector("#first-name");
const slider = document.querySelector("#badness");

form.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const userObject = Object.fromEntries(formData);
  console.log(slider.value + userObject.age);
  slider.value = console.log(userObject);
  event.target.reset();
  firstName.focus();
});
