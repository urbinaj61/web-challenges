console.clear();

let number = 0;
let count = 0;

while (number <= 0.9) {
  number = Math.random();
  count++;
}

console.log(
  `The number that ended the loop was ${number} and it took ${count} rounds to do this!`
);
