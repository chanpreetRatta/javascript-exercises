const findTheOldest = function (people) {
  let oldestPerson = people.reduce((accumulator, currentValue) => {
    let currentOldest = getAge(
      accumulator.yearOfDeath,
      accumulator.yearOfBirth
    );
    let nextOldest = getAge(currentValue.yearOfDeath, currentValue.yearOfBirth);

    return currentOldest > nextOldest ? accumulator : currentValue;
  });

  return oldestPerson;
};

function getAge(deathDate, birthDate) {
  if (!deathDate) deathDate = new Date().getFullYear();

  return deathDate - birthDate;
}
// Do not edit below this line
module.exports = findTheOldest;
