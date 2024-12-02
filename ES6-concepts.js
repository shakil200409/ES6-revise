const numbers = [12, 37, 25, 88, 63];
const person = {
  name: "Sakib Khan",
  age: 36,
  movies: ["King Khan", "Password", "Shikar"],
};

// template string
const actor = `My name is ${person.name}, I am ${person.age} years old. My rating is ${numbers[3]} and one of my finest movie is ${person.movies[2]}. See you in the next movie.`;

console.log(actor);

// Arrow functions

// Without parameter
const getANumber = () => 12;
console.log(getANumber());

// With a parameter
const addFifty = (num) => num + 50;
console.log(addFifty(41));

//With multiple parameter
const addNumbers = (a, b, c) => a + b + c;
console.log(addNumbers(10, 20, 30));

// Single line
/**
 * Upper threes are single line functions
 * another in below
 */
const giveNumber = () => numbers[2];
console.log(giveNumber());

// Multiple line
const doMath = (num1, num2, num3) => {
  const sum = num1 + num2;
  const sub = num3 - num1;
  const result = sum * sub;
  return result;
};
console.log(doMath(20, 10, 30));

/**Spread Operator */
const newNumbers = [...numbers];
console.log("copied array is: ", newNumbers);

numbers.push(52);
console.log("main Array is: ", numbers);

const currentNumber = [...numbers, 36];
console.log("Modified array is:", currentNumber);
