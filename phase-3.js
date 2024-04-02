const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here
  const startTime = Date.now();
  const arr = [];
  let num = increment;

  for (let i = 0; i < 10; i++) {
    arr.push(addNums(num));
    num += increment;
  }

  const endTime = Date.now();
  console.log(`Time: ${endTime - startTime}`);

  return arr;
}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here
  console.time('time');
  let sums = increment;
  const arr = [];


  for (let i = 1; i <= 10; i++) {
    arr.push(addManyNums(sums))
    sums += increment;
    console.timeLog('time');
  }

  console.timeEnd('time');
  // console.log(arr);
  return arr;
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
