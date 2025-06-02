console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');
const currentHour = new Date().getHours();
const currentWeekday = new Date().getDay();
const weekDaysArray = [
  " ",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const coloursArray = [
  " ",
  "darkgray",
  "lightblue",
  "lightblue",
  "lightblue",
  "lightblue",
  "hotpink",
  "hotpink",
];
const weekDay = weekDaysArray[currentWeekday];
const dayColour = coloursArray[currentWeekday];
console.log(currentHour, currentWeekday, weekDay);

function getGreeting(currentHour) {
  if (currentHour >= 6 && currentHour <= 12)
    return `Good Morning on a lovely ${weekDay} morning`;

  if (currentHour >= 13 && currentHour <= 18)
    return `Good Afternoon on a lovely ${weekDay} afternoon`;

  if (currentHour >= 19 && currentHour <= 22)
    return `Good Evening on a lovely ${weekDay} evening`;

  if (
    (currentHour >= 23 && currentHour <= 24) ||
    (currentHour >= 1 && currentHour <= 5)
  )
    return `Good Night on a lovely ${weekDay} night`;
}

function getDayColor(dayColour) {
  return dayColour;
}

display.textContent = getGreeting(5);
document.body.style.backgroundColor = getDayColor(dayColour);
