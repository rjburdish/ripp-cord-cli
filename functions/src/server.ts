import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import * as bodyParser from "body-parser";
import * as express from "express";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { printSchema } from "graphql";
import { config } from "./config";
import { schema } from "./schema";

export class Server {
  public app: express.Application;
  constructor() {
    // create expressjs application
    this.app = express();

    // configure application
    this.init();
  }
  public init() {
    const { graphQL } = config;
    const { endpointURL } = graphQL;
    const db = this._initializeFirestore();

    // /api/graphql
    this.app.use(
      "/graphql",
      bodyParser.json(),
      graphqlExpress({
        context: (req: any) => ({ ...req, db }),
        schema
      })
    );

    // /api/graphiql
    this.app.use("/graphiql", graphiqlExpress({ endpointURL }));

    // /api/schema
    this.app.use("/schema", (req, res) => {
      res.set("Content-Type", "text/plain");
      res.send(printSchema(schema));
    });
  }

  private _initializeFirestore() {
    admin.initializeApp(functions.config().firebase);
    return admin.firestore();
  }
}
