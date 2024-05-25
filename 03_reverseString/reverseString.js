const reverseString = function(string) {
  let stringArray = string.split("");
  let reverseArray = stringArray.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
