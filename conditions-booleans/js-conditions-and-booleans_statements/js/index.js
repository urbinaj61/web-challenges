console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = 'h4x0r1337';
const receivedPassword = 'password1234';

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log('Welcome, You are logged in as  Brunhilde1984');
} else {
  console.log('Access denied');
}

// Part 2: Even / Odd
const number = 7;

if (number % 2 === 0) {
  console.log('Even number');
} else {
  console.log('Odd number');
}

// Part 3: Hotdogs
let numberOfHotdogs = 1000001;
let price = 0;

if (numberOfHotdogs < 5) {
  console.log((price = numberOfHotdogs * 2));
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log((price = numberOfHotdogs * 1.5));
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log((price = numberOfHotdogs));
} else if (numberOfHotdogs >= 1000000) {
  console.log((price = numberOfHotdogs * 0.1));
}

// Part 4: Daytime
const currentHour = 19;

let statement = '';

currentHour < 17
  ? (statement = 'Still need to learn...')
  : (statement = 'Partytime!!!');

// Part 5: Greeting
const userName = 'Archibald';

let greeting = 'Hello ' + '//enter your code here' + '!';
userName === 'Klaus'
  ? (greeting = `Hello Coach!`)
  : (greeting = `Hello ${userName}!`);

console.log(greeting);
