function selfNumber() {
  let d = (num) => {
    let sum = num;
    while (num > 0) {
      sum += num % 10;
      num = parseInt(num / 10);
    }

    return sum;
  };

  const ds = Array(10001);

  for (i = 1; i <= 10000; i++) {
    ds.push(d(i));
  }

  for (i = 1; i <= 10000; i++) {
    if (!ds.includes(i)) {
      console.log(i);
    }
  }
}

selfNumber();
