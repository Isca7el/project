const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');
    //   hearts = document.querySelectorAll('.heart'),
    //   oneHeart = document.querySelector('.heart');
      

console.dir(box);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px;`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); //Сщздание элемента div
// const text = document.createTextNote('Тут был я');

div.classList.add('black');

// document.body.append(div); // Добавление элемента div в конец body 

// document.querySelector('.wrapper').append(div); //Добавление элемента div в конец wrapper

wrapper.append(div); //Добавление элемента div в конец wrapper
//wrapper.appendChild(div); //Добавление элемента div в конец wrapper

//wrapper.prepend(div); //Добавление элемента div в начало wrapper

//hearts[0].before(div); // Добавление элемента div перед hearts[0]
//hearts[0].after(div); // Добавление элемента div после hearts[0]

//wrapper.insertBefore(div, hearts[1]); // Добавление элемента div перед hearts[1]

//circles[0].remove(); //Удаление элемента circles[0]
//wrapper.removeChild(hearts[1]); //Удаление элемента hearts[1]

hearts[0].replaceWith(circles[0]); //Замена элемента hearts[0] на circles[0]
//wrapper.replaceChild(circles[0], hearts[0]); Замена элемента hearts[0] на circles[0]

//div.innerHTML = "<h1>Hello, World!</h1>"; // Добавление теста, можно тегов и разметки html
//div.textContent = "Hello"; // Добавление теста

div.insertAdjacentHTML("afterend",'<h2>Hello</h2>');

