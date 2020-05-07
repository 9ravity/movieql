import { getById, getMovies, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};
/* 사용자가 뭘할지 정의 query는 단지 select mutation은 db의 변화는 전부 */
//graphql이 query에 맞는 resolvers를 찾음

export default resolvers;
