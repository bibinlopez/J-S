// Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens
// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)

// Higher Order function - accepts another function as an argument or returns another function as a result

// Callback Function - passed to a another function as an argument executed inside that function

function morning(name) {
  return `Good morning ${name.toUpperCase()}`
}
function afternoon(name) {
  return `Good morning ${name.repeat(3)}`
}

function greet(name, cb) {
  const myName = 'john'
  console.log(`hi ${cb(name)}, my name is ${name}`);
}

greet('bobo', morning)
greet('peter', afternoon)