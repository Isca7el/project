// Обработчик событий
// 1. Добавление функции в сам тег

// <button ocnclick="alert('Click')" id="btn">Нажми меня</button> - ocnclick

// 2. Свойство дом дерева

const btns = document.querySelectorAll('button');
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Second Click');
// };

let i = 0;
const deleteElement = (event) =>{
    console.log(event.currentTarget);
    console.log(event.type);
    //event.target.remove();
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// Всплытие событий: событие совершается сначла на вложенном элементе, затем выше

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once:true});
});

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event.target);
});



