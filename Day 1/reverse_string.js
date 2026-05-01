let str = "Hello";

const reverseFunction = (str) => {
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
};

// console.log(reverseFunction(str));

// another solution

const reverseFunction2 = (str) => str.split("").reverse().join("");

// console.log(reverseFunction2(str));

// another solution

const reverseFunction3 = (str) =>
  str.split("").reduce((rev, char) => char + rev, "");

console.log(reverseFunction3(str));
