const { ApolloServer } = require('@apollo/server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('@apollo/server-plugin-landing-page-graphql-playground');
const { expressMiddleware  } = require('@apollo/server/express4');

const typeDefs = `
  type Query {
    hello: String
    getPerson(name: String, age: Int): String

    getInt: Int,
    getFloat: Float,
    getBoolean: Boolean,
    getString: String,
    getId: ID
  }
`;

const resolvers = {
  Query: {
    hello: () => 'hola mundo',
    getPerson: (_, args) => `Hello, my name is ${args.name}, I'm ${args.age} years old.`,

    getInt: () => 1,
    getFloat: () => 1.1,
    getBoolean: () => true,
    getString: () => 'Word',
    getId: () => '1'
  }
}

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground
    ]
  });

  await server.start();

  app.use(expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }));

}
module.exports = useGraphql;
