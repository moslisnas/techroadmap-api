import { Request } from "express";
import { QueryError } from "mysql2";
import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { GenericRepository } from "@repo/Generic.repository";
import { TechnologyVersion } from "@interfaces/TechnologyVersion.interface";

export class TechnologyVersionRepository extends GenericRepository {
  constructor(private db: Connection) {
    super();
  }

  public getAll(req: Request): Promise<TechnologyVersion[]> {
    this.useDatabase(this.db, req);

    const query: string = "SELECT * FROM technology_version";
    return new Promise((resolve, reject) => {
      this.db.query<TechnologyVersion[]>(
        query,
        (err: QueryError | null, results: TechnologyVersion[]) => {
          if (err) {
            return reject(err);
          }
          console.log(query);
          resolve(results);
        }
      );
    });
  }

  public getById(id: string, req: Request): Promise<TechnologyVersion | null> {
    this.useDatabase(this.db, req);

    const query: string = "SELECT * FROM technology_version WHERE id=?";
    return new Promise((resolve, reject) => {
      this.db.query<TechnologyVersion[]>(
        query,
        id,
        (err: QueryError | null, results: TechnologyVersion[]) => {
          if (err) {
            return reject(err);
          }
          console.log(query);
          resolve(results.length > 0 ? results[0] : null);
        }
      );
    });
  }

  public getByIdTechnology(
    id_technology: string,
    req: Request
  ): Promise<TechnologyVersion[]> {
    this.useDatabase(this.db, req);

    const query: string =
      "SELECT * FROM technology_version WHERE id_technology=?";
    return new Promise((resolve, reject) => {
      this.db.query<TechnologyVersion[]>(
        query,
        id_technology,
        (err: QueryError | null, results: TechnologyVersion[]) => {
          if (err) {
            return reject(err);
          }
          console.log(query);
          resolve(results);
        }
      );
    });
  }
}
