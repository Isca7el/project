'use strict';

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button')[1]; // Передает все кнопки в псевдомассив HTML Collection, обращаться к этому методу через [i], i - индекс

console.log(btns); // Псевдомассив отличаетя от массива, тем что у псевдомассива нет методов как push и т.д.

const btns = document.getElementsByTagName('button');

console.log(btns[1]);

const circles = document.getElementsByClassName('circle');

console.log(circles);

const hearts = document.querySelectorAll('.heart'); // Выдает в NodeList c методом forEach

console.log(hearts);

hearts.forEach( item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); //Находи самый первый элемент  таким классом

console.log(oneHeart);

const oneDiv = document.querySelector('div');

console.log(oneDiv);