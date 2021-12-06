const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// const input = `2
// 6 12 60
// 30 50 30
// 99 99 1000`.split("\n");

for (let i = 1; i < input.length; i++) {
  const [h, w, n] = input[i].split(" ");

  const floor = n % h === 0 ? h : n % h;
  let ho = n % h === 0 ? n / h : parseInt(n / h) + 1;

  if (ho < 10) {
    console.log(`${floor}0${ho}`);
  } else {
    console.log(`${floor}${ho}`);
  }
}
