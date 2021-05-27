"use strickt;"

//Пример функции с callback с setTimeout - сщдае задержку
function first() {
    //Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();



//Создание функции callback вполняетя после выполнения программы
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done); // Функция передается, но не вызывается

//Callback -Позволяют нам быть уверенными в том, что определенный код не начнет исполнение, до того момента, пока код не завершит свое исполнение