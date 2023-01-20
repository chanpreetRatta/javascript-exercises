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

const multiply = function () {};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
