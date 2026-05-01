let str = "Madam";

function checkPalindrome(str) {
  let clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = "";

  for (let i = clean.length - 1; i >= 0; i--) {
    reversed += clean[i];
  }

  return clean === reversed;
}

// let res = checkPalindrome(str);
// console.log(res);

//another solution

const checkPalindrome2 = (str) => {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean.split("").reverse().join("") === clean;
};

// console.log(checkPalindrome2(str));

// the two pointer solution

const checkPalindrome3 = (str) => {
  let clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = clean.length - 1;

  while (left < right) {
    if (clean[left] !== clean[right]) return false;

    left++;
    right--;
  }

  return true;
};

console.log(checkPalindrome3(str));
