'use strict';

const item = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
];

// 1) Filter and show the product that will be bought when you don't have much money I mean Cheap one
const prices = [];
for (const [key, { name, price }] of Object.entries(item)) {
  prices.push(price);
}
const cheap = Math.min(...prices);
console.log(`The cheapest product is ${cheap}$`);

// 2) Filter and show the product that will be expensive in the array
const priceings = [];
for (const [key, { name, price }] of Object.entries(item)) {
  prices.push(price);
}
const expensive = Math.max(...prices);
console.log(`The most expensive product is ${expensive}$`);

// 3) Calculate the full price of all product combined
let total = 0;
for (const { name, price } of item.values()) {
  total += price;
}
console.log(`full price: ${total}$`);

// 4) Calculate the full price of all product combined and remove product that are under the 10 dollar
let full = 0;
for (const { name, price } of item.values()) {
  price > 10 ? (full += price) : '';
}
console.log(`full price: ${full}$`);
