const person = {
  name: "Sakib Khan",
  age: 36,
  movies: ["King Khan", "Password", "Shikar"],
};

// making an object to JSON string
const personString = JSON.stringify(person);
// console.log(person);
// console.log(personString);

// making a JSON string to JavaScript Object
const personObj = JSON.parse(personString);
// console.log(personObj);

// getting value and keys from an object
const keys = Object.keys(person);
// console.log(keys);

const values = Object.values(person);
// console.log(values);

// Add or Remove from an Array
const products = [
  { name: "laptop", price: 20000, brand: "HP", color: "Silver" },
  { name: "Phone", price: 15000, brand: "Samsung", color: "Black" },
  { name: "Watch", price: 5000, brand: "Casio", color: "Brown" },
  { name: "Buds", price: 1500, brand: "Lenovo", color: "White" },
];

const newProduct = {name: 'webCam', price: 1000, brand: 'Canon', color: 'white'};

// Copying products array and adding the new object to the array
const newProducts = [...products, newProduct];
// console.log(products);
// console.log(newProducts);


/**
 * Creating a new array without the specific object/item 
 * We are creating an array without phone
 */
const remaining = products.filter(product => product.name !== 'Phone');
// console.log(remaining);