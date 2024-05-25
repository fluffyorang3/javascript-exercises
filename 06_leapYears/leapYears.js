const leapYears = function(inputYear) {
  let answer;

  if (inputYear % 4 == 0 && (inputYear % 100 != 0 || inputYear % 400 == 0)){
    answer = true;
  } else {
    answer = false;
  }
  
  return answer;
}

// Do not edit below this line
module.exports = leapYears;
