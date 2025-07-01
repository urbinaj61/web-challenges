import { add, subtract, multiply, divide } from "./index.js";

test("Tests the add function. Adding (2 + 3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("add function for negative results (2, -10)", () => {
  const result = add(2, -10);
  expect(result).toBeLessThan(0);
});

test("add function toBeCloseTo (0.1, 0.2", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

test("subtract function. Subtract (15, 5", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("subtract functiion returning a negative (-15, 5", () => {
  const result = subtract(-15, 5);
  expect(result).toBeLessThan(0);
});

test("Multiply function returning 2 * 4", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("multiply function, returns a negative if first argument is negative", () => {
  const result = multiply(-5, 10);
  expect(result).toBeLessThan(0);
});

test("multiply function, returns a negative if second argument is negative", () => {
  const result = multiply(5, -10);
  expect(result).toBeLessThan(0);
});

test("multiply function, returns a positive if both arguments are negative", () => {
  const result = multiply(-5, -10);
  expect(result).toBe(50);
});

test("divide function. Divide(9,3", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("divide function. Returns You should not do this! if trying to divide by 0", () => {
  const result = divide(15, 0);
  expect(result).toBe("You should not do this!");
});
