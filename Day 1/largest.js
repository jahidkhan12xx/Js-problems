let arr = [1, 5, 3, 9, 2];

const findLargest = (arr) => {
  let largest = arr[0];

  for (let i of arr) {
    if (i > largest) largest = i;
  }

  return largest;
};

console.log(findLargest(arr));

// JS way

const findLargest2 = (arr) => Math.max(...arr);

console.log(findLargest2(arr));
