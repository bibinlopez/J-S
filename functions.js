// Functions, return, if, arrays, for loop

const gas = [20, 40, 100];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    total += arr[i]
  }
  if (total > 100) {
    console.log(`You are spending way too much`);
    return total;
  }
  console.log(`you are good total less than 100`);
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([300, 500, 600, 1]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal
});