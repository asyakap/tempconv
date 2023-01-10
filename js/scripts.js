// business logic
function convertFahrenheit(tempC) {
  const tempF = tempC * 9 / 5 + 32;
  return tempF;
}

function convertCelcius(tempF){
  const tempCelsius = (tempF - 32) * 5/9;
  return tempCelsius;
}

// user interface logic 
const tempC = parseInt(prompt("Enter a temperature in Celsius:"));
const tempF = parseInt(prompt("Enter a temperature in Farenheit:"));

window.alert(
  "The temperature in Fahrenheit equals to " + convertFahrenheit(tempC) + 
   ".\nThe temperature in Fahrenheit equals to " + convertCelcius(tempF) +"." 
  );



