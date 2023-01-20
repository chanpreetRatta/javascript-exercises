const getTheTitles = function (books) {
  let booksTitles = [];
  for (let book of books) {
    booksTitles.push(book.title);
  }

  return booksTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
