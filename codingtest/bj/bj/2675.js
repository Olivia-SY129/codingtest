const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2

3 ABC
5 /HTP
9 %%2
`
)
  .trim()
  .split("\n");

for (let i = 1; i < +stdin.length; i++) {
  const arr = stdin[i].split(" ");
  let sum = "";
  for (j = 0; j < arr[1].length; j++) {
    for (k = 0; k < +arr[0]; k++) {
      sum += arr[1][j];
    }
  }
  console.log("%s", sum);
}
