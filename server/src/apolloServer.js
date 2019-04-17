import { ApolloServer, gql } from 'apollo-server-express';
import { getSpace, getSpaces } from './db/helper';
import { getHeapSpaceStatistics } from 'v8';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Space {
    name: String
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    spaces: [Space]
    space(name: String): Space
  }
`;

const resolvers = {
  Query: {
    spaces: () => getSpaces(),
    space: (parent, args, context, info) => getSpace({ name: args.name }),
  },
};

export const createServer = (app) => {
  const server = new ApolloServer({ typeDefs, resolvers });

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));

  return server;
};
