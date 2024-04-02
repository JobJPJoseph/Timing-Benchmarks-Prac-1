const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in

  const arr = [];
  let num = increment;

  for (let i = 0; i < 10; i++) {
    arr.push(addNums(num));
    num += increment;
  }

  return arr;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in

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

module.exports = [addNums10, addManyNums10];
