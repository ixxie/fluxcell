import { ApolloServer, gql } from 'apollo-server-express';
import { getSpace, getSpaces } from './db/helper';
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    spaces: [Space]
    spaceByName(name: String): Space
  }
  scalar Date

  type Space {
    id: ID
    name: String
    email: String
    created_at: Date
    updated_at: Date
  }
`;

const dateType = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return value.getTime();
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10);
    }
    return null;
  },
});

const resolvers = {
  Query: {
    spaces: () => getSpaces(),
    spaceByName: async (parent, args, context, info) => {
      const res = await getSpace({ name: args.name });
      return res[0];
    },
  },
  Date: dateType,
};

export const createServer = (app) => {
  const server = new ApolloServer({ typeDefs, resolvers });

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));

  return server;
};
