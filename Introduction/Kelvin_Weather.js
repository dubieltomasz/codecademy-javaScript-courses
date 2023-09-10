//constant variable that is equal to today forecast
const kelvin = 0;

//constant variable that is equal to today forecast (but in celsius)
const celsius = kelvin - 273;

//variable that is equal to today forecast (but in fahrenheit)
let fahrenheit = celsius * (9/5) + 32;

//rounding down value of farenheit to get decimals
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

const newton = Math.floor(celsius * (33/100));
console.log(newton);
