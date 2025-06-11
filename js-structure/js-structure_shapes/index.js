import { getRandomColor } from "./utils/randomColor";

console.clear();

const root = document.getElementById("root");

const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
  const newColour = getRandomColor();
  circle.style.backgroundColor = newColour;
});

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  const newColour = getRandomColor();
  square.style.backgroundColor = newColour;
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  const newColour = getRandomColor();
  pentagon.style.backgroundColor = newColour;
});

root.append(circle, square, pentagon);
