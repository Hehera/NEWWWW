
const numberOfFilms = +prompt('How much films did you wach?', '');
 
personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

const a = prompt('Один з останніх переглянутих фільмів?', ''),
      b = prompt('На скільки оціните його?', ''),
      c = prompt('Один з останніх переглянутих фільмів?', ''),
      d = prompt('На скільки оціните його', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;
      console.log(personalMovieDB);