console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

form.addEventListener("submit", event => {
  event.preventDefault();
  const numberA = Number(event.target.numberA.value);
  const numberB = Number(event.target.numberB.value);
  const operator = event.target.operator.value;

  let result;

  switch (operator) {
    case "addition":
      {
        result = add(numberA, numberB);
      }
      break;

    case "subtraction":
      {
        result = subtract(numberA, numberB);
      }
      break;

    case "multiplication":
      {
        result = multiply(numberA, numberB);
      }
      break;

    case "division":
      {
        result = divide(numberA, numberB);
      }
      break;
  }

  resultOutput.textContent = result;
});
