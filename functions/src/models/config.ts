export interface IEnvironmentConfig {
  [key: string]: IConfig;
  development: IConfig;
  local: IConfig;
  production: IConfig;
}

export interface IConfig {
  graphQL: IGraphQLConfig;
  database: IDatabaseConfig;
}

export interface IGraphQLConfig {
  endpointURL: string;
  graphIQLURL: string; // GRAPHIQL
  schemaUrl: string; // SCHEMA
}

export interface IDatabaseConfig {
  connectionString: string;
}
