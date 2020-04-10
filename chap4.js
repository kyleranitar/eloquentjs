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
