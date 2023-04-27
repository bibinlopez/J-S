// Arrays , Functions and Objects
// Objects - key/value pairs methods
// dot notation

const person = {
  name: 'john',
  lastName: 'peters',
  age: 40,
  education: false,
  married : true,
  siblings: ['anna', 'susan','peter'],
  // greeting: function () {
  //   console.log('Hello my name is JOHN');
  // },
  greeting () {
    console.log('Hello my name is JOHN');
  }
}

const age = person.age;
console.log(age);
person.name = 'bob'

console.log(person.name);
console.log(person.siblings[2]);
person.greeting();