// Triangle
for (let triangle = ""; triangle.length < 8; triangle += "#")
  console.log(triangle);

// FizzBuzz
for (let num = 1; num <= 100; num++) {
  let output = "";
  if (num % 3 == 0) output += "Fizz";
  if (num % 5 == 0) output += "Buzz";
  console.log(output || num);
}
// Chessboard

let board = "";
let size = 8;

for (let x = 0; x < size; x++) {
  for (let y = 0; y < size; y++) {
    if ((x+y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
