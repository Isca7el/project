/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbos = addForm.querySelector('[type="checkbox"]');

    // 1 задание 

    // adv.forEach(item =>{
    //     item.remove();
    // });

    

    // 2 задание 

    const deleteAdv = (arr) => {
        adv.forEach(function (item) {
            item.remove();
        });
    };

    deleteAdv(adv);   

    genre.textContent = 'ДРАМА';

    // 3 задание 

    poster.style.backgroundImage = 'url("img/bg.jpg")';

    // 4 задание 



    addForm.addEventListener('sbmit', (event) => {
        event.preventDefault();
    });

    const newFilm = addInput.value;
    const favorite = checkbos.checked;

    movieDB.movies.push(newfilm);
    movieDB.movies.sort();
});


movieDB.movies.sort();

function createMovieList(films, parent) {
    parent.innerHTML = "";

    //console.log(poster.innerHTML);

    // 5 задание 

    films.forEach((films, i) => {
            parent.innerHTML += `
      <li class="promo__interactive-item">${i + 1} ${film}
          <div class="delete"></div>
      </li>`;
        }
    
    createMovieList(movieDB.movies, mvieList);