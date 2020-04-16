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

// Exercise 1
let arrays =[[1,2,3],[4,5],[6]];

console.log(arrays.reduce((flat, current) => flat.concat(current, [])));

// Exercise 2
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

// Exercise 3
function every(array, test) {
  for (let element of array) {
    if (!test(element)) return false;
  }
  return true;
}

function every2(array, test) {
  return !array.some(element => !test(element))
}

// Exercise 4
function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter({name} => name != "none");

  if(counted.length == 0) return "ltr";

  return counted.reduce((a,b) => a.count > b.count ? a : b).name; 
}
