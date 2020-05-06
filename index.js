import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
console.log(" 서버 시작");

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("Graphql Server Running"));

// schema 는 정의된 데이터, 서버에 전송할 데이터 또는 받을 데이터의 총 정의된 문서
// schema를 만들고 resolver를 만들고-> localhost:4000 playground에서 test 가능
// graphql-yoga 안에 playground 들어있음
