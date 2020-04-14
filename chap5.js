// Higher-Order functions

// Abstracting repetition
// From a repetition, can abstract further

// Version 1
for (i = 0; i < 10; i++) {
  console.log(i);
}

// Version 2
function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

// Version 3
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

// Creating the function value on the spot.
let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels;)
