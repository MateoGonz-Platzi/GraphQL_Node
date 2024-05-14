const { ApolloServer } = require('@apollo/server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('@apollo/server-plugin-landing-page-graphql-playground');
const { expressMiddleware } = require('@apollo/server/express4');

const typeDefs = `
  type Query {
    hello: String!
    getPerson(name: String, age: Int): String

    getInt: Int,
    getFloat: Float,
    getBoolean: Boolean,
    getString: String,
    getId: ID,

    getNumbers(numbers: [Int!]!): [Int]

    getProduct: Product

  }

  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String!
    image: String!
    createdAt: String!
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
    getId: () => '1',

    getNumbers: (_, args) => args.numbers,

    getProduct: () => {
      return {
        id: '1',
        name: 'Product 1',
        price: 100,
        description: 'This is a product',
        image: 'https://placeimg.com/640/480/tech',
        createdAt: new Date().toISOString()
      }
    }
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
