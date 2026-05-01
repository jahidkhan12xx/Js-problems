let arr = [1, 2, 5, 3, 4, 7];

const findThirdLargest = (arr) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  let thirdLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      thirdLargest = secondLargest;
      secondLargest = num;
    } else if (num > thirdLargest && num < secondLargest) {
      thirdLargest = num;
    }
  }

  return thirdLargest === -Infinity ? null : thirdLargest;
};

console.log(findThirdLargest(arr));
