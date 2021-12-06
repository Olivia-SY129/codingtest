// const input = require("fs").readFileSync("/dev/stdin").toString();
// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// const saved = [];
// const output = new Array(26);
// for (i = 0; i < alphabet.length; i++) {
//   if (!input.includes(alphabet[i])) {
//     output[i] = -1;
//   } else {
//     if (!saved.includes(alphabet[i])) {
//       saved.push(alphabet[i]);
//       output[i] = input.indexOf(alphabet[i]);
//     }
//   }
// }

// console.log(output.reduce((prev, next) => prev + " " + next));

const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `baekjoon`;

let array = new Array(26);
let solution = "";

array.fill(-1);

for (let i = 0; i < input.length; i++) {
  if (array[input.charCodeAt(i) - 97] === -1) {
    array[input.charCodeAt(i) - 97] = i;
  }
}

for (let i = 0; i < array.length - 1; i++) {
  solution = solution + array[i] + " ";
}
solution = solution + array[array.length - 1];

console.log(solution);
