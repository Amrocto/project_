/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");
// document.write("Вы посмотрели "+numberOfFilms+" фильмов")

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false


// }

// const favouriteMovie = prompt("Один из последних просмотренных фильмов?", " "),
//       favourtieMovieRating = prompt("На сколько оцените его?", " "),
//       favouriteMovie2 = prompt("Один из последних просмотренных фильмов?", " "),
//       favourtieMovieRating2 = prompt("На сколько оцените его?", " ");

// const favouriteMovie = prompt("Один из последних просмотренных фильмов?", " "),
// favourtieMovieRating = +prompt("На сколько оцените его?", " ");
// personalMovieDB.movies[favouriteMovie] = favourtieMovieRating;
// console.log(personalMovieDB);



let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");

    while( numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");
    }
}

start();

const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
}

function rememberMyFilms(){
    for (let i = 0; i < 1; i++){ 
        const favouriteMovie = prompt("favourite movies", "");
        const favourtieMovieRating = prompt("his rating");
    if(favouriteMovie != null && favouriteMovie != "" && favouriteMovie.length < 50 && favourtieMovieRating != null && favourtieMovieRating != "" && favourtieMovieRating.length < 50) {
        personalMovieDB.movies [favouriteMovie] = favourtieMovieRating;
    } else {
        i--;
    }
    }
    console.log(personalMovieDB);
}

// rememberMyFilms();

function detectPersonaLevel(){
if (personalMovieDB.count < 10) {
    document.write("Просмотрено достаточно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    document.write("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    document.write("Вы киноман");
} else document.write("Произошла ошибка");

}

// detectPersonaLevel();

function showMyDB(){
    if (!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}
// showMyDB();

function writeYourGenres(){
    for (let i = 1; i <= 3; i++) {
        const genres = prompt(`Ваш любимый жанр под номером ${i-1}`);
        personalMovieDB.genres[i-1] = genres;
    }
}
writeYourGenres();
console.log(personalMovieDB);




/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

//мой способ
// let j = 0;
// for (let i = 0; i < 2; i++){
//     console.log(`j до цикла ${j}`);
//     first:while(j<2){
//         const favouriteMovie = prompt("Один из последних просмотренных фильмов?", ""),
//         favourtieMovieRating = +prompt("На сколько оцените его?", "");
//         if (favouriteMovie == null || favouriteMovie == "" || favouriteMovie.length > 50) {
//             // document.write("no")
//              continue first;
//             } else {
//                 j++;
//                 // document.write ("ok");
//             }
//             // j++;
//         personalMovieDB.movies[favouriteMovie] = favourtieMovieRating;
//         console.log(`j после цикла ${j}`);
//     }
// }
// console.log(personalMovieDB);
// if (personalMovieDB.count < 10) {
//     document.write("Просмотрено достаточно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//     document.write("Вы классический зритель");
// } else if (personalMovieDB.count > 30) {
//     document.write("Вы киноман");
// } else document.write("Произошла ошибка");


// for
// for (let i = 0; i < 2; i++){ 
//     const favouriteMovie = prompt("favourite movies", "");
//     const favourtieMovieRating = prompt("his rating");
// if(favouriteMovie != null && favouriteMovie != "" && favouriteMovie.length < 50 && favourtieMovieRating != null && favourtieMovieRating != "" && favourtieMovieRating.length < 50) {
//     personalMovieDB.movies [favouriteMovie] = favourtieMovieRating;
// } else {
//     i--;
// }
// }
// console.log(personalMovieDB);

//while
// let i=0;
// while(i<2){
//     const favouriteMovie = prompt("favourite movies", ""),
//     favourtieMovieRating = prompt("his rating");
//     if(favouriteMovie != null && favouriteMovie != "" && favouriteMovie.length < 50 && favourtieMovieRating != null && favourtieMovieRating != "" && favourtieMovieRating.length < 50) {
//         personalMovieDB.movies [favouriteMovie] = favourtieMovieRating;
//         i++;
//     } else { 
//         i--;
//     }
// }
// console.log(personalMovieDB);

// do while
// let i=0;
// do{
//     const favouriteMovie = prompt("favourite movies", ""),
//     favourtieMovieRating = prompt("his rating");
// } while (i<2){
//         if(favouriteMovie != null && favouriteMovie != "" && favouriteMovie.length < 50 && favourtieMovieRating != null && favourtieMovieRating != "" && favourtieMovieRating.length < 50) {
//             personalMovieDB.movies [favouriteMovie] = favourtieMovieRating;
//             i++;
//         } else { 
//             i--;
//         }
//     }
//     console.log(personalMovieDB);








// const favouriteMovie = prompt("Один из последних просмотренных фильмов?", " ");
// if (favouriteMovie == null || favouriteMovie == "" || favouriteMovie.length > 50){
//     document.write("no");
// } else {
//     document.write ("yes");
// }

// const value1 = prompt("2qd", "");
// console.log(value1);
// if(value1 == null) {
//     console.log("ok");
// }



