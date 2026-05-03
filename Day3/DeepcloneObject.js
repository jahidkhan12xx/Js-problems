let obj = {
  name: "Jahid",
  address: {
    parmanent: {
      city: "Rajshahi",
      postal: 6203,
    },
  },
};

// let obj2 = JSON.parse(JSON.stringify(obj));
let obj2 = structuredClone(obj);

obj.name = "Khalid";

console.log(obj2);
console.log(obj);
