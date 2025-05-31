// Change this value to test different "weather" conditions.
const weather = 'snowing';

// For some unknown reason my bash terminal was not finding my index.js file. I was in the correct directory. Tried node index.js and node .  Neither worked!!!
// Created an index.html file to see results in the browser console instead.

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = -3;

switch (true) {
  case weather === 'sunny' && temperature > 20:
    console.log(`It's sunny and warm!`);
    break;

  case weather === 'sunny' && temperature <= 20:
    console.log(`It's sunny but a bit chilly!`);
    break;

  case weather === 'rainy':
    console.log(`It's raining, don't forget your umbrella!`);
    break;

  case weather === 'snowing' && temperature > 0:
    console.log(`It's snowing, stay warm!`);
    break;

  case weather === 'snowing' && temperature < 0:
    console.log(`Freezing snow!`);
    break;

  default:
    console.log(`I'm not sure what the weather is like.`);
}
