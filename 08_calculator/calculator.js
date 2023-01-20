const add = function (first_value, second_value) {
  return first_value + second_value;
};

const subtract = function (first_value, second_value) {
  return first_value - second_value;
};

const sum = function (array) {
  let sum = 0;
  array.forEach((item) => {
    sum = sum + item;
  });

  return sum;
};

const multiply = function (array) {
  let multiply = 1;
  array.forEach((item) => {
    multiply = multiply * item;
  });

  return multiply;
};

const power = function (base, exponent) {
  let baseToReturn = 1;
  for (let i = 0; i < exponent; i++) {
    baseToReturn = base * baseToReturn;
  }

  return baseToReturn;
};

const factorial = function (number) {
  if (number === 0) return 1;
  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
