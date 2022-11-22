const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];


const zad1 = (arr1, arr2) => [...arr1, ...arr2];
const zad2 = (arr) => arr.reverse()[0];
const zad3 = (arr, arg) => arr.filter(el1 => el1 > 2);
const zad4 = (arr) => arr.reduce((previousValue, currectValue) => previousValue + currectValue);
const zad5 = (arr) => arr.map(n => n * n + 3);


console.log(zad1(arr1, arr2));
console.log(zad2(arr2));
console.log(zad3(numbers));
console.log(zad4(numbers));
console.log(zad5(numbers));