import { IConfig, IEnvironmentConfig, IGraphQLConfig } from "../models";

const value: IEnvironmentConfig = {
  development: {
    database: {
      connectionString: ""
    },
    graphQL: {
      endpointURL: "",
      graphIQLURL: "", // GRAPHIQL
      schemaUrl: "" // SCHEMA
    }
  },
  local: {
    database: {
      connectionString: ""
    },
    graphQL: {
      endpointURL: "/ripp-cord-cli/us-central1/api/graphql/",
      graphIQLURL: "/ripp-cord-cli/us-central1/api/schema/", // GRAPHIQL
      schemaUrl: "/ripp-cord-cli/us-central1/api/graphiql/" // SCHEMA
    }
  },
  production: {
    database: {
      connectionString: ""
    },
    graphQL: {
      endpointURL: "",
      graphIQLURL: "", // GRAPHIQL
      schemaUrl: "" // SCHEMA
    }
  }
};

const env: any = process.env.NODE_ENV;
export const config: IConfig = value[env] || value.local;
