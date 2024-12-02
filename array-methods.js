// map method
/**
 * It loop throws to an array and returns value with an array, that's why you need to declare a variable to keep the value which will be returned by the map method.
 */

const products = [
  { name: "laptop", price: 20000, brand: "HP", color: "Silver" },
  { name: "Phone", price: 15000, brand: "Samsung", color: "Black" },
  { name: "Watch", price: 5000, brand: "Casio", color: "Brown" },
  { name: "Buds", price: 1500, brand: "Lenovo", color: "White" },
];

const brands = products.map((product) => product.brand);
console.log(brands);

const prices = products.map((product) => product.price);
console.log(prices);

// forEach method
/**
 * This method doesn't return any value with array but runs a loop throw the array
 * You can also do multi-line program with forEach method
 */
products.forEach((product) => console.log(product.color));

// filter method
/**
 * This method will return the value with an array and check the requirements with loop throw the whole array.
 * You need to declare a variable to keep the returns
 */
const cheap = products.filter((product) => product.price <= 5000);
console.log(cheap);

const specificName = products.filter((product) => product.name.includes("a"));
console.log(specificName);

// find method
/**
 * It will return only one and first item which is matched with the condition
 * It wont return value with array
 */
const special = products.find((product) => product.name.includes("a"));
console.log(special);
