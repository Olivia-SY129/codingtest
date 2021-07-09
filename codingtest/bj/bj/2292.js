// input = 13;

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

i = 1;
end = 1 + 3 * (i * (i - 1));
// console.log(end);

while (input > end) {
  i += 1;
  end = 1 + 3 * (i * (i - 1));
  // console.log(end);
}

console.log(i);
