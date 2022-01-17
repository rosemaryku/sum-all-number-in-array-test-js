const sum = require("../sum-from-a-to-b-test");

let sumSoFar = 0;

function sumItems(arr) {
  let sum = 0;
  for (let num of arr) {
    if (Array.isArray(num)) {
      sum += sumItems(num);
    } else {
      sum += num;
    }
  }
  return sum;
}

sumItems([[1, 2, [[3], 4]], 5, []]);

module.exports = sumItems;
// console.log(sumItems([2, 5, 50]))
