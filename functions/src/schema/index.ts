import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools"; // addMockFunctionsToSchema
import { resolvers } from "../resolvers";
// import mocks from "./mocks";

const typeDefs = `
type Query {
  getStuff: Stuff
  getOtherStuff(stuff: String): Stuff
}

type Mutation {
  saveStuff(email: String!, password: String!): Stuff
}

type Stuff {
  message: String!
}
`;

const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

export { schema };

/*----------------------------------------------------------
///////////////////////////////////////////////////////////
                  GraphIQL Query's
//////////////////////////////////////////////////////////

mutation saveStuff($email:String!, $password: String!){
  saveStuff(email: $email, password:$password) {
    message
  }
}
query stuff{
    getStuff{
      message
    }
}
query otherStuff($stuff:String){
    getOtherStuff(stuff: $stuff){
      message
    }
}

----------------------------------------------------------
//////////////////////////////////////////////////////////
                  Query Variables
/////////////////////////////////////////////////////////

{
  "email": "hey",
  "password": "stuff",
  "stuff": "stuff"
}

*/
