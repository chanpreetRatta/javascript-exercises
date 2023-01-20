const fibonacci = function (value) {
  if (value < 0) return "OOPS";
  let fibonacciSequence = [1, 1];
  for (let i = 2; i < value; i++) {
    fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
  }

  return fibonacciSequence[fibonacciSequence.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
