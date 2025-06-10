import { zooAnimals } from "../utils/db.js";

// This website uses a function to check whether a specific animal is part of the zoo or not but it's not working correctly.
// Please implement the function 'hasAnimal' that gets an array of animals and an animal name
// The function should return 'true' if the animal name is included in the array or 'false' if not.

function hasAnimal(animals, animalName) {
  if (animals.includes(animalName)) return true;
}

// Bonus:
// Can you modify the function so that it works case-insensitive?
// This means it should return true, even if you search for 'sheep' or 'SHEEP' or 'sHeEp'.
// Hint: Remember the 'map' function

// -------------------------------------------------------------------------------------
// ----- The following code is used for the browser preview. Please don't touch it -----

const animalList = document.querySelector("[data-js='animalList']");
const animalForm = document.querySelector("[data-js='animalForm']");
const output = document.querySelector("[data-js='output']");

hasAnimal(zooAnimals, "Sheep");

animalForm.addEventListener("submit", event => {
  event.preventDefault();
  const searchQuery = event.target.searchQuery.value.toUpperCase();
  const zooAnimalsUpperCase = zooAnimals.map(animal => {
    return animal.toUpperCase();
  });

  output.textContent = "";
  if (searchQuery.trim() === "") {
    return;
  }

  const result = hasAnimal(zooAnimalsUpperCase, searchQuery);
  console.log(result);
  output.textContent = result
    ? `Yes, we have ${searchQuery}`
    : `No, we don't have ${searchQuery}`;
});
zooAnimals.forEach(animal => {
  const tag = document.createElement("span");
  tag.classList.add("tag");
  tag.textContent = animal;
  animalList.append(tag);
});
