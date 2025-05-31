// Change this value to test different "weather" conditions.
const weather = 'snowing';

switch (weather) {
  case 'sunny':
    console.log(`It's sunny!`);
    break;

  case 'rainy':
    console.log(`It's raining, don't forget your umbrella!`);
    break;

  case 'snowing':
    console.log(`It's snowing, stay warm!`);
    break;

  default:
    console.log(`I'm not sure what the weather is like.`);
}

// For some unknown reason my bash terminal was not finding my index.js file. I was in the correct directory. Tried node index.js and node .  Neither worked!!!
// Created an index.html file to see results in the browser console instead.

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 22;
