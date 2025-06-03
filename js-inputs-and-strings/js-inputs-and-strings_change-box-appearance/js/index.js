console.clear();

const box = document.querySelector("[data-js=box]");
const colour = document.querySelector("[data-js=input-color]");
const radius = document.querySelector("[ data-js=input-radius]");
const rotation = document.querySelector("[data-js=input-rotation]");

colour.addEventListener("input", () => {
  box.style.backgroundColor = `hsl(${colour.value}, 70%, 60%)`;
});

radius.addEventListener("input", () => {
  box.style.borderRadius = `${radius.value}%`;
});

rotation.addEventListener("input", () => {
  box.style.transform = `rotate(${rotation.value}deg)`;
});
