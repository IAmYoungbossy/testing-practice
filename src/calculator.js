function calc() {
  const add = (num1, num2) => num1 + num2;
  const subtract = (num1, num2) => num1 - num2;
  const multiply = (num1, num2) => num1 * num2;
  const divide = (num1, num2) => num1 / num2;
  return {
    add, subtract, multiply, divide,
  };
}

const calculate = calc();
module.exports = calculate;
