// The Secret Life of Objects

// Encapsulation
// Putting functions into functions and making everything simpler

// Methods
function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: white, speak};

whiteRabbit.speak("oh my ears")
