let arr = [
  { name: "A", age: 20 },
  { name: "B", age: 20 },
  { name: "C", age: 21 },
];

let obj = {};

// for (let item of arr) {
//   obj[item.age] = obj[item.age]
//     ? [...obj[item.age], { name: item.name }]
//     : [{ name: item.name }];
// }
// console.log(obj);

for (let item of arr) {
  if (!obj[item.age]) {
    obj[item.age] = [];
  }

  obj[item.age].push({ name: item.name });
}

console.log(obj);
