const repeatString = function (string, number) {
  if (number < 0) return "ERROR";
  let holdString = "";
  for (let i = 0; i < number; i++) {
    holdString = holdString + string;
  }

  return holdString;
};
// Do not edit below this line
module.exports = repeatString;
