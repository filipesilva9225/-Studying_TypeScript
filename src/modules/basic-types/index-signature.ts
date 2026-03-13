type Movie = {
  title: string;
  year: number;
  [key: string | number]: string | number | boolean;
};

type Movies = {
  [key: string]: Movie;
};

let movies: Movies = {
  movie1: {
    title: 'The Matrix',
    year: 1999,
    genre: 'Sci-Fi',
    isFavorite: true,
    director: 'The Wachowskis',
  },
  movie2: {
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi',
    isFavorite: false,
    runtime: 148,
  },
  movie3: {
    title: 'The Godfather',
    year: 1972,
    genre: 'Crime',
    isFavorite: true,
  },
};

export function showMovies(movies: Movies) {
  console.log(movies);
}

showMovies(movies);
