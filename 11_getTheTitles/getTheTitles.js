

const getTheTitles = function(book) {
  let newArray = [];
  book.forEach((element, index, array) => {
    newArray.push(element.title);
  } )
  return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
