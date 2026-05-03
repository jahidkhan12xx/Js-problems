let str1 = "listenb";
let str2 = "silentt";

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freq = {};

  for (item of str1) {
    freq[item] = freq[item] ? freq[item] + 1 : 1;
  }

  for (item of str2) {
    if (!freq[item]) return false;
    freq[item]--;
  }

  return true;
}

console.log(isAnagram(str1, str2));
