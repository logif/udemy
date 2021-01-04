"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if ( a != null && b != null && a != '' && b != ''  && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  detectPersonalMovie: function() {
    if (personalMovieDB.count < 10) {
      alert( 'Просмотрено довольно мало фильмов' );
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert( 'Вы классический зритель' );
    } else if (personalMovieDB.count >= 30) {
      alert( 'Вы киноман' );
    } else {
      alert( 'Произошла ошибка' );
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i < 2; i++) {
      let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

      if (genres === '' || genres == null) {
        console.log('Вы ввели некорректные данные или не ввели их вовсе');
        i--;
      } else {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
      }
    }

    personalMovieDB.genres.forEach((item, index) => {
      console.log(`Любимый жанр ${index + 1} - это ${item}`);
    });
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  showMyDB: function() {
    if (personalMovieDB.privat === false) {
      return personalMovieDB;
    }
    return `Ошибка доступа`;
  },
};

// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalMovie();
// personalMovieDB.writeYourGenres();
// console.log(personalMovieDB.showMyDB());
