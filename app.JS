const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

// using the curly braces
const { residence } = vampire; 
console.log(residence); // prints 'Transylvania'

//instead of this
const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 


// for nested objects
const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'
