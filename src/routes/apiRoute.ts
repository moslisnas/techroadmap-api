import { Express, Request, Response } from "express";
import { API_VERSION } from "@config/env.config";
import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { TechnologyApi } from "@api/TechnologyApi";
import { TechnologyVersionApi } from "@api/TechnologyVersionApi";

export const createApiRoutes = (db_con: Connection, app: Express) => {
  const majorVersion: string = API_VERSION.split(".")[0];
  const apiBasePath = `/api/v${majorVersion}`;

  //1. API route
  app.get(apiBasePath, (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.end(`{ status: "ok" }`);
  });
  app.get(`/api/v${API_VERSION}`, (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.end(`{ status: "ok" }`);
  });
  //2. Get data
  const technologyApi: TechnologyApi = new TechnologyApi(db_con);
  technologyApi.defineGets(apiBasePath, app);

  const technologyVersionApi: TechnologyVersionApi = new TechnologyVersionApi(db_con);
  technologyVersionApi.defineGets(apiBasePath, app);
  //3. Add data
  //TODO
};
