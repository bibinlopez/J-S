// Local Scope
// can not be access from outside code blocks
// if - NOT VAR

let Name = 'bobo';

function calculate() {
  const Name = 'john';
  const age = 25
  // code goes here
  becomesGlobal = 'global variable'
}
calculate()
console.log(becomesGlobal);

if (true) {
  const Name = 'john';
}

{
  const Name = 'john';
  const special = 'special'
}


console.log(`my name is ${Name}`);