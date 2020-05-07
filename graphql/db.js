let movies = [
  {
    id: 0,
    name: "isdflk",
    score: 18,
  },
  {
    id: 1,
    name: "dfvlk",
    score: 38,
  },
  {
    id: 2,
    name: "fdvlks",
    score: 28,
  },
  {
    id: 3,
    name: "dslkv",
    score: 68,
  },
  {
    id: 4,
    name: "asfc",
    score: 13,
  },
  {
    id: 5,
    name: "ascac",
    score: 11,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  /* const filteredPeople = people.filter(function person(id) {
    return id === people.id;
  }); */
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };

  movies.push(newMovie);
  return newMovie;
};
