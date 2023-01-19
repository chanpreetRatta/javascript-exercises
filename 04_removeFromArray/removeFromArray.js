const removeFromArray = function (array, ...numbers) {
  let returnArray = [];
  array.forEach((number) => {
    if (!numbers.includes(number)) returnArray.push(number);
  });
  return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
