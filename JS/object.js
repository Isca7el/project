"use strickt";

const options = {
    name: 'test',
    width: 1024,
    hight: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

const {border, bg} = options.colors;
console.log(border);

// options.makeTest();
// console.log(Object.keys(options).length);

// //console.log(options["colors"]["border"]); //Вывод свойства из обьекта в colors

// //console.log(options.name);

// //delete options.name;//Удаляет свойство 
// //console.log(options);

// let counter = 0; //счетчик свойств

// // for (let key in options) {
// //     if (typeof(options[key]) === 'object') {
// //         for (let i in options[key]) {
// //             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// //             counter++;
// //         }
// //     } else {
// //         console.log(`Свойство ${key} имеет значение ${options[key]}`);
// //         counter++;
// //     }
// // } 
// //Перебирает свойства объекта


// console.log(counter);