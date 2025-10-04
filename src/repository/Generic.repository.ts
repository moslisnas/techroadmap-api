import { Request } from "express";
import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { DATABASE_NAME } from "@config/env.config";
import { QueryError } from "mysql2";

export class GenericRepository {
  public useDatabase(db_con: Connection, req: Request): void {
    let useQuery = `USE ${DATABASE_NAME}`;
    db_con.query(useQuery, (error: QueryError|null) => {
      if (error) {
        throw error;
      }
      console.log(
        `Using Database ${DATABASE_NAME} from server ${req.hostname} HTTP version: ${req.httpVersion} - IP ${req.ip}`
      );
    });
  }
}
