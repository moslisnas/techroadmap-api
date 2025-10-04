import mysql, { QueryError } from "mysql2";
import { Connection } from "mysql2/typings/mysql/lib/Connection";
import {
  DATABASE_HOST,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_USERNAME,
} from "@config/env.config";

// Create connection to database
export const connection: Connection = mysql.createConnection({
  host: DATABASE_HOST,
  port: Number(DATABASE_PORT),
  user: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
});
connection.connect((error: QueryError|null) => {
  if (error) {
    console.log("Database Connection Failed !!!", error);
  } else {
    console.log("connected to Database");
  }
});
