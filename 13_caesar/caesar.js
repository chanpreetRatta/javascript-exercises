const caesar = function (string, spaces) {
  let arrayOfStrings = string.split("");
  let arrayOfCharCodes = stringToCharCode(arrayOfStrings);
  let cryptArray = cryptTheArray(arrayOfCharCodes, spaces);
  console.log(cryptArray);
  return charCodeToString(cryptArray);
};

function stringToCharCode(string) {
  let arrayOfCharCodes = [];
  string.forEach((string) => {
    if (isLatter(string)) arrayOfCharCodes.push(string.charCodeAt());
    else arrayOfCharCodes.push(string);
  });

  return arrayOfCharCodes;
}

function charCodeToString(array) {
  let stringArray = [];
  array.forEach((element) => {
    if (typeof element === "number") {
      stringArray.push(String.fromCharCode(element));
    } else {
      stringArray.push(element);
    }
  });

  return stringArray.join("");
}

function isLatter(string) {
  return (
    (string.charCodeAt() > 64 && string.charCodeAt() < 91) ||
    (string.charCodeAt() > 96 && string.charCodeAt() < 123)
  );
}

function mod(dividend, divisor) {
  return ((dividend % divisor) + divisor) % divisor;
}

function cryptTheArray(array, spaces) {
  let arrayOfCryptCharCodes = [];
  array.forEach((element) => {
    if (isLatter(String.fromCharCode(element))) {
      if (element > 64 && element < 91)
        arrayOfCryptCharCodes.push(mod(element + spaces - 65, 26) + 65);
      else if (element > 96 && element < 123)
        arrayOfCryptCharCodes.push(mod(element + spaces - 97, 26) + 97);
    } else arrayOfCryptCharCodes.push(element);
  });

  return arrayOfCryptCharCodes;
}

// Do not edit below this line
module.exports = caesar;
