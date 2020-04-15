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

// Datasets with Higher Order Functions

// map, forEach, filter, reduce are standard array methods.

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

// Strings and Character Codes
