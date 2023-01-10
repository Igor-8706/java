"use strict";

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const   a = prompt('Один из последних просмотренных фильмов', ''),
//         b = prompt('На сколько оцените его?', ''),
//         c = prompt('Один из последних просмотренных фильмов', ''),
//         d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


//     console.log(personalMovieDB);

const num = '50';

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('много');
// } else {
//     console.log('ok!');
// }

// (num == 50) ? console.log('Ok') : console.log('error');

switch (num) {
    case '49':
        console.log('Неверно');
        break;
    case '100':
        console.log('Неверно');
        break;
    case '50':
        console.log(' Верно');
        break;
    default:
        console.log(' Не в этот раз');
        break;
}