// Data Structures
// Objects

// Methods
// Properties that contain functions

// Objects
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);

//Arrays for Objects
let journal = [
  {events: [],
  squirrel: false},
  {events: [],
  squirrel: true}
];

// Mutability
// Objects can be diff from each other
// Comparing different objects even with the same properties will not be equal

// Computing werewolf squirrel thing in a 2x2 table.
// you can place it in an array

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

// Array loops
// Instead of this
for (let i = 0; i < journal.length; i++) {
  let entry = journal[i];
}

// Do this!
for (let entry of JOURNAL) {
  console.log(entry.events)
}


//

for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}

// A bunch of explaining of functions


// JSON
// Serializing the data -> converting to a flat description


// Exercise 1
function range(x, y, step = x < y ? 1 : -1) {
  let array = [];
  if (step > 0) {
    for (let i = x; i <= y; i += step) {
      array.push(i);
    }
  } else if (step < 0) {
    for (let i = x; i >= y; i += step) {
      array.push(i);
    }
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

// Exercise 2
function reverseArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < (Math.floor(array.length / 2)); i++) {
    let back = array[array.length - 1 - i];
    array[array.length - 1 - i] = array[i];
    array[i] = back;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

//Exercise 3
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node != null ; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (list == null) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

// Exercise 4
function deepEqual(a, b) {
  if (a === b) return true;

  // If neither params are an object return false immediately
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  // assign variables to properties
  let keysA = Object.keys(a), keysB = Object.keys(b);

  // check if lengths are equal
  if (keysA.length != keysB.length) return false;

  // loop through the object's properties
  for (let key of keysA) {
    // If keysB does not have a, or the deepEqual function does not turn true
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}
