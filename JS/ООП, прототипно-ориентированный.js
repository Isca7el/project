"use strickt;"

let str = "some";
let strObj = new String();

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello");
    }
}; 

//Оновные методы для работы с обьектами: Create, set, get
const john = Object.create(soldier);

// const John = {
//     health: 100
// };

//John.__proto__ = soldier; // Устареший код с использованием proto

//console.log(John.armor);

//Object.setPrototypeOf(John, soldier);

john.sayHello();