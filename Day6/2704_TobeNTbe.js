var expect = function (val) {
  return {
    toBe: (num) => {
      if (val === num) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (num) => {
      if (val !== num) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));
