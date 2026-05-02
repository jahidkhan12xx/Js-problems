const users = [
  { id: 1, name: "Jahid" },
  { id: 2, name: "Rahim" },
  { id: 1, name: "Jahid" },
  { id: 3, name: "Karim" },
  { id: 2, name: "Rahim" },
];
let set = new Set();
const fixed = users.filter((item) => {
  if (set.has(item.id)) return false;
  set.add(item.id);
  return true;
});

// console.log(fixed);

const unique = [...new Map(users.map((user) => [user.id, user])).values()];
console.log(unique);
