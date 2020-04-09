// Topic of Functions
// Function Declaration move to top of scope!
// An example

console.log("The future says.. ", future());

function future() {
  return "try!"
}


// A lesson in Recursion
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
			 find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}


console.log(findSolution(13));
// → (((1 * 3) + 5) * 3)


// Exercise 1
function min(a, b) {
  if (a < b) return a;
  else return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Exercise 2
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

console.log(isEven(53));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1023));
// → false

// Exercise 3
// Your code here.
function countBs(string) {
  return countChar(string, "B");
}

function countChar(string, letter) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == letter) {
      counter += 1;
    }
  }
  return counter;
}


console.log(countBs("ABCDRVBb"));
// → 2
console.log(countChar("kakkerlak", "K"));
// → 4
