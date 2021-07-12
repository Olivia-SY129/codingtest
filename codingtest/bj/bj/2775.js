// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((x) => +x);

// // const input = `2
// // 1
// // 3
// // 2
// // 3`
// //   .split("\n")
// //   .map((x) => +x);

// input.shift();

// function getResidents(k, n) {
//   if (k === 0) {
//     return n;
//   } else {
//     let floor = [];
//     for (let i = 1; i <= n; i++) {
//       floor.push(i);
//     }
//     while (k > 0) {
//       floor = floor.map((el, index, arr) => {
//         let sum = 0;
//         for (let i = 0; i <= index; i++) {
//           sum += arr[i];
//         }
//         return sum;
//       });
//       k -= 1;
//     }
//     return floor[n - 1];
//   }
// }

// while (input.length > 1) {
//   // console.log(input[0], input[1]);
//   console.log(getResidents(input[0], input[1]));
//   input.shift();
//   input.shift();
// }

// ans

var fs, input, tests, memo;
fs = require("fs");
input = fs.readFileSync("/dev/stdin").toString().split("\n");

var memo = [];
function result(k, n) {
  memo[k] = memo[k] || [];
  if (k === 0 || n === 1) {
    memo[k][n - 1] = n;
  } else {
    memo[k][n - 1] = memo[k][n - 1] || result(k - 1, n) + result(k, n - 1);
  }
  return memo[k][n - 1];
}

tests = parseInt(input[0]);
for (var i = 1; i <= tests; i++) {
  var row, col;
  row = parseInt(input[2 * i - 1]);
  col = parseInt(input[2 * i]);

  console.log(result(row, col));
}
