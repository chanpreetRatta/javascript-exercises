const caesar = function (string, spaces) {
  let arrayOfStrings = string.split("");
  let returnArray = arrayOfStrings.map((latter) => {
    return String.fromCharCode(latter.charCodeAt(latter) + spaces);
  });

  return returnArray.join();
};
// Do not edit below this line
module.exports = caesar;
