/**
 * Array Destructuring
 */

const numbers = [38, 92];

// const [num1, num2] = [38,92];
// console.log(num1, num2);

// const [num1, num2] = numbers;
// console.log(num1, num2, numbers);

const person = {
  name: "Sakib Khan",
  age: 36,
  movies: ["King Khan", "Password", "Shikar"],
};

const [movie1, movie2, movie3] = person.movies;
// console.log('1st:', movie1, '2nd:', movie2, '3rd:', movie3, 'Whole in an array:', person.movies);


/**
 * Object Destructuring
 */

// const {name, age} = {name: 'Shakil', skill: 'Front-end Dev', age: 20};
// console.log(name, age);

const {name, age, skill, address} = {name: 'Shakil', address: 'Sylhet', skill: 'Front-end Dev', age: 20};
// console.log(name, age, address, skill);

const employee = {
    ide: 10,
    designation: 'Developer',
    machine: 'PC',
    languages: ['html', 'css', 'JavaScript'],
    specification: {
        name: 'Kodom Ali',
        height: 70, 
        weight: 65,
        watch: {
            brand: 'Lobon',
            color: 'Black',
            price: 1000
        }
    }
};

// const {machine, ide} = employee;
// console.log(machine, ide);

// const {height, weight} = employee.specification;
// console.log(name, height, weight);
