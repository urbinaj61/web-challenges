console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const success = document.querySelector("[data-js=success]");

const hideTosError = () => tosError.setAttribute("hidden", "");

const showTosError = () => tosError.removeAttribute("hidden");

const hideSuccessMessage = () => success.setAttribute("hidden", "");

const showSuccessMessage = () => success.removeAttribute("hidden");

hideTosError();
hideSuccessMessage();

form.addEventListener("submit", event => {
  event.preventDefault(event);

  if (tosCheckbox.checked) {
    hideTosError();
    showSuccessMessage();
    alert("Form submitted");
  } else {
    showTosError();
  }
});

tosCheckbox.addEventListener("click", () => {
  if (tosError && tosCheckbox.checked) {
    hideTosError();
  }
});
