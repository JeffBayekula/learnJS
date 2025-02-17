//FUNCTIONS
function sum(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function multi(x, y) {
  return x * y;
  console.log("Hello!"); // This line of code won't run because I have already returned.
}

console.log(sum(5, 4), "sum function value"); // 9
console.log(sub(15, 5), "sub function value"); // 10
console.log(multi(3, 4), "multi function value"); // 12

//STRINGS
console.log("This is a string");
console.log("This is also a string");

//STRING PROPERTY .length
let weather = "snowy";
console.log(weather.length); // 5

//STRING METHODS
console.log(weather.toUpperCase()); // SNOWY
console.log(weather.toLowerCase()); // snowy

//STRING CHARACTER ACCESS
let city = "Athens";
console.log(city[0]); // A
console.log(city[1]); // t
console.log(city[2]); // h

//CHARACTER ACCESS + .length PROPERTY
console.log(city[city.length - 2]); // n

//CHARACTER ACCESS USING .at() METHOD
console.log(city.at(-6)); // A
console.log(city.at(3)); // e

//SUBSTRING
console.log(city.substring(1, 5)); // "then"
console.log(city.substring(1)); // "thens"

//PLUS OPERATOR
