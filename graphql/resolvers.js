const resolvers = {
  Query: {
    name: () => "noh",
  },
};
/* 사용자가 뭘할지 정의 query는 단지 select mutation은 db의 변화는 전부 */
export default resolvers;
