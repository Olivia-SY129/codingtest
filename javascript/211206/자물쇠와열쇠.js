const rotateClockwise = (arr) => {
  const len = arr.length;
  const rotatedArr = Array.from(Array(len), () => Array(len).fill(0));
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      rotatedArr[j][len - 1 - i] = arr[i][j];
    }
  }
  return rotatedArr;
};

// console.log(
//   rotateClockwise([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ])
// );

const extendArr = (arr) => {
  const len = arr.length;
  const extendedArr = Array.from(Array(len * 3 - 2), () =>
    Array(len * 3 - 2).fill(0)
  );
  for (let i = len - 1; i < 2 * len - 1; i++) {
    for (let j = len - 1; j < 2 * len - 1; j++) {
      extendedArr[i][j] = arr[i - len + 1][j - len + 1];
    }
  }
  return extendedArr;
};

const screen = (keyX, keyY, key, extendedArr) => {
  const len = key.length;
  const test = extendedArr.map((arr) => [...arr]);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      test[i + keyX][j + keyY] += key[i][j];
    }
  }
  return test;
};

const isFit = (originArrLen, test) => {
  for (let i = originArrLen - 1; i < 2 * originArrLen - 1; i++) {
    for (let j = originArrLen - 1; j < 2 * originArrLen - 1; j++) {
      if (test[i][j] !== 1) return false;
    }
  }
  return true;
};

// console.log(
//   extendArr([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ])
// );

const solution = (key, lock) => {
  let rotate = 0;
  const len = lock.length;
  const extendedLock = extendArr(lock);

  while (rotate < 4) {
    // screen
    for (let i = 0; i < extendedLock.length - len + 1; i++) {
      for (let j = 0; j < extendedLock.length - len + 1; j++) {
        const test = screen(i, j, key, extendedLock);
        // check
        if (isFit(len, test)) return true;
      }
    }
    rotate += 1;
    key = rotateClockwise(key);
  }

  return false;
};

const key = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 1],
];
const lock = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];

console.log(solution(key, lock));
