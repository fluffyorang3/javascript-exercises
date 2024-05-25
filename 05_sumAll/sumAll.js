const sumAll = function(num1, num2) {
  let numTerms;
  
  if (num1 < 0 || num2 < 0 || typeof num1 != "number" || typeof num2 != "number") {
    result = "ERROR"
  } else {
    num1 < num2 ? numTerms = num2 - num1 + 1:
    numTerms = num1 - num2 + 1;
    result = (numTerms / 2) * (num1 + num2);
  } 
  
  return result;

};

// Do not edit below this line
module.exports = sumAll;
