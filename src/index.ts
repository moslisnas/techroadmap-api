import express, { Express, Request, Response } from "express";
import path from "path";
import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { connection } from "@db/connection";
import { createApiRoutes } from "@routes/apiRoute";
import { NODE_ENV, PORT } from "@config/env.config";

//1. Create server and consts
const app: Express = express();
const cors = require("cors");
const port = PORT || 3000;
const staticPath =
  NODE_ENV === "development"
    ? __dirname // Development mode, serve files from "src"
    : path.join(__dirname, "dist"); //Production mode, serve files from "dist"
app.use(express.static(staticPath));

//Open to all
if (NODE_ENV === "development") {
  app.use(cors());
}
//Not open to all
else {
  //TODO
  console.log("NO DEVELOPMENT CONFIGURATION");
  /*app.use(
  cors({
    origin: "http://localhost:4200",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);*/
}

//2. Create MySQL connection object
let db_con: Connection = connection;

//3. Home route and api index:
app.get("/", (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(`{status: "ok"}`);
});

//4. API routes:
createApiRoutes(db_con, app);

//5. Server execution:
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
