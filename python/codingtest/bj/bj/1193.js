// const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

const input = +"15";
let result = 1;

if (input === 1) {
  result = `1/1`;
} else {
  let n = 1;
  let sum = 1;

  while (sum < input) {
    n += 1;
    sum += n;
  }

  const sub = sum - input;
  const a = n - sub;
  const b = 1 + sub;

  if (n % 2 === 0) {
    result = `${a}/${b}`;
  } else {
    result = `${b}/${a}`;
  }
}

console.log(result);
