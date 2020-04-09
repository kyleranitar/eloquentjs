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
