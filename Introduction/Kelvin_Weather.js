//constant variable that is equal to today forecast
const kelvin = 0;

//constant variable that is equal to today forecast (but in celsius)
const celsius = kelvin - 273;

//variable that is equal to today forecast (but in fahrenheit)
let fahrenheit = celsius * (9/5) + 32;

//round down value of farenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
