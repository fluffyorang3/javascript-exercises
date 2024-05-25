const convertToCelsius = function(fahrenheit) {
  let celcius;
  celcius = (fahrenheit - 32) * 5 / 9;
  celciusRounded = Math.round(celcius * 10) / 10;
  return celciusRounded;
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit;
  fahrenheit = (celcius * 9 / 5) + 32;
  fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
  return fahrenheitRounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
