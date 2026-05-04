function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

function search(query) {
  console.log("Searching for:", query);
}
const debouncedSearch = debounce(search, 2000);

debouncedSearch("JavaScript");
debouncedSearch("Debounce Function");
debouncedSearch("Debouncing in JavaScript"); 
