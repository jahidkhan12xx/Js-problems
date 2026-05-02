let str = "Javascript";

let vowel = "aeiou";

let count = 0;

for (let char of str) {
  if (vowel.includes(char.toLocaleLowerCase())) {
    count++;
  }
}

console.log(count);
