import { Request } from "express";
import { QueryError } from "mysql2";
import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { GenericRepository } from "@repo/Generic.repository";
import { TechnologyVersionRepository } from "@repo/TechnologyVersion.repository";
import { Technology } from "@interfaces/Technology.interface";

export class TechnologyRepository extends GenericRepository {
  constructor(
    private db: Connection,
    public technologyVersionRepository: TechnologyVersionRepository
  ) {
    super();
  }

  public getAll(req: Request): Promise<Technology[]> {
    this.useDatabase(this.db, req);

    const query: string = "SELECT * FROM technology";
    return new Promise((resolve, reject) => {
      this.db.query<Technology[]>(
        query,
        (err: QueryError | null, results: Technology[]) => {
          if (err) {
            return reject(err);
          }
          console.log(query);
          resolve(results);
        }
      );
    });
  }

  public getById(id: string, req: Request): Promise<Technology | null> {
    this.useDatabase(this.db, req);

    const query: string = "SELECT * FROM technology WHERE id=?";
    return new Promise((resolve, reject) => {
      this.db.query<Technology[]>(
        query,
        id,
        (err: QueryError | null, results: Technology[]) => {
          if (err) {
            return reject(err);
          }
          console.log(query);
          resolve(results.length > 0 ? results[0] : null);
        }
      );
    });
  }
}
