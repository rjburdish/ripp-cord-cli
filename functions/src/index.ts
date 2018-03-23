import { CloudFunction, https, HttpsFunction } from "firebase-functions";
import { Server } from "./server";

const { app } = new Server();

export const api: any = https.onRequest(app);
