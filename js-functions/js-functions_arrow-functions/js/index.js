console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible.

HINT: You can find more information about arrow functions and implicit returns in the handout.
*/

const getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};

const getHour = getCurrentHour();
console.log(getHour);

const getVectorLength = (x, y, z) => (x ** 2 + y ** 2 + z ** 2) ** 0.5;
const vectorLength = getVectorLength(3, 5, 8);
console.log(vectorLength);

const cleanInput = string => string.toLowerCase().trim();
const stringClean = cleanInput(" FGDFGDFGDFGDFG   ");
console.log(stringClean);

/*
Rewrite the following arrow functions as classic functions.
*/

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}

function add3(a, b, c) {
  return a + b + c;
}

function repeat10(string) {
  return string.repeat(10);
}
