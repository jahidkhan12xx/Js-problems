function trhottle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

function test() {
  console.log("Executed at", new Date().toLocaleTimeString());
}

const throttled = trhottle(test, 1000);

// Call every 200ms
setInterval(() => {
  console.log("Call attempt:", Date.now());
  throttled();
}, 200);
