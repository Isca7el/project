"use strickt";

// Метод - это вспомогательные функции
// Свойство - это вспомогательные значения

const str = "teSt";
const arr = [1, 2, 3];

console.log(str.length);
console.log(arr.length);

console.log(str[2]);
console.log(str.toUpperCase()); //метод увеличеним регистра
console.log(str.toLowerCase()); //метод понижения регистра

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); //Метод Поиск подстроки
console.log(fruit.indexOf("q")); //Метод Поиск подстроки

const logg ="Hello world";

console.log(logg.slice(6, 10));
console.log(logg.slice(6, 11));
console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 11)); // Метод вырезания то же что и slice

console.log(logg.substr(6, 5)); // Метод вырезания сколько символов нужно вырезать

const prof = "I am a miner";

console.log(prof.slice(7, 12)); // Метод вырезания 
console.log(prof.slice(2, 4));
console.log(prof.slice(2)); 

const num = 12.2;

console.log(Math.round(num)); //Мето округления

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
