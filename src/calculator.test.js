/* eslint-disable no-undef */
const calculate = require("./calculator");

test("add 2 and 8 to be 10", () => {
  expect(calculate.add(2, 8)).toBeCloseTo(10);
});

test("subtract 7 from 10 to be 3", () => {
  expect(calculate.subtract(10, 7)).toBe(3);
});

test("multiply 2 by 8 to be 16", () => {
  expect(calculate.multiply(2, 8)).toBe(16);
});

test("divide 8 by 2 to be 4", () => {
  expect(calculate.divide(8, 2)).toBeCloseTo(4);
});
