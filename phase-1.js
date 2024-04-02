// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in

  // Lets try to solve this in several different ways to see how much time it takes to finish

  // While loop

  // let startTime = Date.now();
  // let sum = 0;
  // let count = 1;

  // while(count <= n) {
  //   sum += count;
  //   count++;
  // }

  // let endTime = Date.now();

  // console.log(`Time: ${endTime - startTime}`); // => 0, 0, 0, 1, 1, 23, 18, 70

  // return sum;

  // Array.reduce

  // let startTime = Date.now();
  // const array = [];

  // while (n) {
  //   array.push(n);
  //   n--;
  // }

  // const sum = array.reduce(function (elem, accum) {
  //   return elem + accum;
  // }, 0);

  // let endTime = Date.now();

  // console.log(`Time: ${endTime - startTime}`); // => 1, 0, 0, 2, 9, 63, 598, 1201

  // return sum;

  // For-loop

  let sum = 0;
  // const startTime = Date.now();

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  // const endTime = Date.now();

  // console.log(`Time: ${endTime - startTime}`); // => 0, 0, 0, 0, 1, 9, 5, 47
  return sum;

  // Array.forEach

  // let startTime = Date.now();
  // const array = [];
  // let sum = 0;

  // while (n) {
  //   array.push(n);
  //   n--;
  // }

  // array.forEach(function (elem) {
  //   return sum += elem;
  // });

  // let endTime = Date.now();

  // console.log(`Time: ${endTime - startTime}`); // => 0, 0, 0, 1, 1, 21, 245, 837

  // return sum;

  // Recursive

  // if (n === 1) return 1;

  // let sum = addNums(n - 1);

  // return sum + n; // Recursion does not work after a certain amount

}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in

  const startTime = Date.now();
  let sums = 0;

  for (let i = 1; i <= n; i++) {
    sums += addNums(i);
  }

  const endTime = Date.now();

  console.log(`Time: ${endTime - startTime}`);

  return sums;
}



module.exports = [addNums, addManyNums];
