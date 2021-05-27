"use strickt";

const arr = [13, 12, 36, 6, 8];
arr.sort(compareNum);
console.log(arr);


function compareNum (a, b) {
    return a - b;
}
//arr[99] = 0;
//console.log(arr.length); // длина массива
//console.log(arr);

// arr.forEach(function(item, i, arr) {  //с функцией калл бэка
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });
 
//arr.pop(); // удаляет последний лемент
//arr.push(10); // добавляет последний элемент

//console.log(arr);

//for (let i = 0; i < arr.length; i++) {
  //  console.log(arr[i]);
//}

// for (let value of arr) {
//     console.log(value);
// } 


// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products);


const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));

