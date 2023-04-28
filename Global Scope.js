// Global Scope vs Local Scope
// any variable outside code block {} is said to be in Global Scope
// can be access any where in the program
// Gotchas : name collisions, modify by mistake


let Name = 'bobo';
Name = 'peter';

function calculate() {
  // some other code...
  console.log(Name);
  Name = 'orange'
  function inner() {
    Name = 'inner name value';
    console.log(`this is from inner function ${Name}`);
  }
  inner()
}
calculate()

if (true) {
  // some other code..
  console.log(Name);
  Name = 'pants'
}

console.log(`my name is ${Name} and I'm awesome`);