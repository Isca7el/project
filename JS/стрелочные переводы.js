"use strict";

function showFirstMessage(text) {
    console.log(text);
    let num = 10; //локальная переменная
}

showFirstMessage("Hello, World!");
console.log(num); // Выдает ошибку "num is not defined", т.к. переменная задана в области видения функции.

let num = 20; // Глобалььная переменная

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage("Hello, World!");
console.log(num);

// глобальная и локальная переменная Выдаст 20 т.к. это глобальная переменная
let num = 20; // Глобалььная переменная

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
}


// Пример змыкания
showFirstMessage("Hello, World!");
console.log(num);

let num = 20; // Глобалььная переменная

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello, World!");
console.log(num);


// Пример замыкания с удалением локальной переменной
showFirstMessage("Hello, World!");
console.log(num);

let num = 20; // Глобалььная переменная

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("Hello, World!");
console.log(num);


function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));


function calc(a, b) {
    return (a + b);
    console.log('sadds'); //Unreacheable code
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret( ) {
    let num = 50;
    return (num);
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log("Helo");
};

logger();

// Стрелочная функция
const calc = (a, b) => a+b;

const calc = (a, b) => {
    console.log('1');
    return a+b;
