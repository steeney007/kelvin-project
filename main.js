//kelvin value of 293 is constant//
const kelvin = 293;
//convert kelvin to celcius by subtracting 273//
var celcius = (kelvin - 273);
//calculation of fahrenheit to celcius as provided, use let to allow value change//
let fahrenheit = ((celcius * (9/5)) + 32);
console.log (fahrenheit);
//fahrenheit rounded down using math.floor method
fahrenheit = Math.floor (fahrenheit); 
console.log (`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log (`The temperature is ${celcius} degrees Celcius`);
let newton = (celcius * (33/100));
newton = Math.floor (newton);
console.log (`The temperature is ${newton} degrees newton`);
