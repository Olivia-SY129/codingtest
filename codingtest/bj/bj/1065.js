const fs = require("fs");
const stdin =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1000`;

let result = [];
for (let i = 1; i <= stdin; i++) {
  if (i < 100) result.push(i);
  else {
    const numbers = i
      .toString()
      .split("")
      .map((v) => +v);
    const diff = numbers[1] - numbers[0];
    if (numbers[2] === numbers[1] + diff) result.push(i);
  }
}
console.log(result.length);
