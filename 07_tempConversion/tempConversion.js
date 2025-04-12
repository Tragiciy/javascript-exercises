const convertToCelsius = function(temperature) {
  let convertedTemperature = temperature * 9/5 +32;
  convertedTemperature.toFixed(1);
  return convertedTemperature;
};

const convertToFahrenheit = function(temperature) {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
