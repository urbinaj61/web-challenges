console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');
const output = document.querySelector('[data-js="output"]');

//Calculate area
const calculateArea = diameter => {
  const radius = diameter / 2;
  return Math.PI * (radius * radius);
};

//Calculate percentage gain
const calculatePercentageGain = (area2, area1) => {
  return ((area1 - area2) / area1) * 100;
};

//Update pizza display
const updatePizzaDisplay = (diameter1, diameter2) => {
  pizza1.style.width = (diameter1 / 24) * 100 + "px";
  pizza2.style.width = (diameter2 / 24) * 100 + "px";
};

//Update output colour
const updateOutputColor = (diameter1, diameter2) => {
  diameter1 <= diameter2
    ? (outputSection.style.backgroundColor = "var(--green)")
    : (outputSection.style.backgroundColor = "var(--red)");
};

//Calculate all
const calculatePizzaGain = (diameter1, diameter2) => {
  const area1 = calculateArea(diameter1);
  const area2 = calculateArea(diameter2);
  updatePizzaDisplay(diameter1, diameter2);
  updateOutputColor(diameter1, diameter2);
  return Math.round(calculatePercentageGain(area1, area2));
};

//Event listener input 1
pizzaInput1.addEventListener("input", () => {
  output.textContent = calculatePizzaGain(pizzaInput1.value, pizzaInput2.value);
});

//Event listener input 2
pizzaInput2.addEventListener("input", () => {
  output.textContent = calculatePizzaGain(pizzaInput1.value, pizzaInput2.value);
});
