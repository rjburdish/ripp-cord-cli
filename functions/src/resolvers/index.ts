import { config } from "../config";
import { IConfig, IContext, IStuff } from "../models";
import { doStuff } from "../utils";

const resolvers = {
  Mutation: {
    saveStuff: (
      root: any,
      { email, password }: any,
      { db }: IContext
    ): IStuff => {
      return { message: email + password };
    }
  },
  Query: {
    getOtherStuff: (root: any, args: any, context: IContext): IStuff => {
      doStuff();
      return { message: "other stuff" };
    },
    getStuff: (root: any, args: any, context: IContext): IStuff => {
      return { message: "stuff" };
    }
  }
};
export { resolvers };
