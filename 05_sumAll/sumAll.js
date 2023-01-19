const sumAll = function (firstNumber, lastNumber) {
  let placeHolder = 0;
  if (typeof firstNumber !== "number" || typeof lastNumber !== "number")
    return "ERROR";
  if (firstNumber < 0 || lastNumber < 0) return "ERROR";
  if (firstNumber > lastNumber) {
    placeHolder = firstNumber;
    firstNumber = lastNumber;
    lastNumber = placeHolder;
  }
  return ((lastNumber - firstNumber + 1) / 2) * (firstNumber + lastNumber);
};

// Do not edit below this line
module.exports = sumAll;
