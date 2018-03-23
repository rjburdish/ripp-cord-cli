import { Firestore } from "@google-cloud/firestore";

export interface IContext {
  db: Firestore;
  request: any;
}
