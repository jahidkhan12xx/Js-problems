let arr = [1, 2, 2, 3, 4, 4];
const unique = [...new Set(arr)];
console.log(unique);

let u = arr.filter((item, index) => {
  return arr.indexOf(item) === index;
});
