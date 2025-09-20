import { Express, Request, Response } from "express";
import { Connection } from "mysql2/typings/mysql/lib/Connection";

export const createApiRoutes = (db_con: Connection, app: Express) => {
  //1. API route
  app.get("/api", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.end(`{status: "ok"}`);
  });
  //2. Get data
  //TODO
  //3. Add data
  //TODO
};
