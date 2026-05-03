const arr = ["a", "b", "a", "c", "b", "a"];

const freq = {};
for (item of arr) {
  freq[item] = freq[item] ? freq[item] + 1 : 1;
}

console.log(freq);
