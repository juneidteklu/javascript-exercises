const convertToCelsius = function(fahrenheitTemp) {
  let unroundedCelTemp = (fahrenheitTemp - 32) * (5/9);
  let roundedCelTemp = unroundedCelTemp.toFixed(1);
  if (Number.isInteger(unroundedCelTemp)){
    return unroundedCelTemp;
  }
  return +roundedCelTemp;
};

const convertToFahrenheit = function(celsiusTemp) {
  let unroundedFahTemp = (celsiusTemp * (9/5)) + 32;
  let roundedFahTemp = unroundedFahTemp.toFixed(1);
  if (Number.isInteger(unroundedFahTemp)){
    return unroundedFahTemp;
  }
  return +roundedFahTemp;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
