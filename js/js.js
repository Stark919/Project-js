// "use strict";
// let storeName = "bub";
// let storeDescription = {
//   budget: 10000,
//   employees: ["boba", "biba", "keka"],
//   products: { lemon: 20, aplle: 11 },
//   open: true,
// };

// console.log(storeDescription);

let numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let a = prompt("Один из последних просмотренних фильмов?");
let b = +prompt("на сколько его оцениваете?");

let c = prompt("Один из последних просмотренних фильмов?");
let d = +prompt("на сколько его оцениваете?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
