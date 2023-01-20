const palindromes = function (string) {
  let checkPalindromes = [];
  let punctuations = ".,:!?;-_{}[]()* ".split("");
  for (let alphabet of string.toLowerCase()) {
    if (!punctuations.includes(alphabet)) checkPalindromes.push(alphabet);
  }

  return checkPalindromes.join("") === checkPalindromes.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
