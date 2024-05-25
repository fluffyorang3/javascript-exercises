const repeatString = function(string, num) {
  let newString;
  num < 0 ? newString = "ERROR" :
  newString = string.repeat(num);
  return newString;
  
  
};

// Do not edit below this line
module.exports = repeatString;
