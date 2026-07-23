const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = num.map((hh) => hh + 10);
const newNum = num
  .map((val) => val * 10)
  .map((val) => val + 1)
  .filter((val) => val > 50);

console.log(newNum);
