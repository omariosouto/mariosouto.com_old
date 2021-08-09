import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    greet: String
  }
  # ================================================
  input CreateSampleTextInput {
    text: String!
  }
  type Mutation {
    createSampleText(input: CreateSampleTextInput): String!
  }
`

const resolvers = {
  Query: {
    greet: () => 'Welcome to @devsoutinho/api-gateway',
  },
  Mutation: {
    createSampleText: (_: unknown, args: any) => args.input.text,
  }
}

export const schema = makeExecutableSchema({
  typeDefs: [
    typeDefs,
  ],
  resolvers
})

export const handler = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
}).createHandler({
  path: '/api/graphql',
})
