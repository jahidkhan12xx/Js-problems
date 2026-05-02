let str = "Javascript";

let vowel = "aeiou";

let count = 0;

for (let char of str) {
  if (vowel.includes(char.toLocaleLowerCase())) {
    count++;
  }
}

console.log(count);

const countVowel = str.split("").filter((char) => vowel.includes(char)).length;

console.log(countVowel);
