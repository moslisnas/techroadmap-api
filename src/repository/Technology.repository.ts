import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { Request } from "express";
import { GenericRepository } from "@repo/Generic.repository";
import { TechnologyVersionRepository } from "@repo/TechnologyVersion.repository";

export class TechnologyRepository extends GenericRepository {
  constructor(
    private db: Connection,
    public technologyVersionRepository: TechnologyVersionRepository
  ) {
    super();
  }

  public getAll(req: Request) {
    this.useDatabase(this.db, req);

    const query = "SELECT * FROM technology";
    return new Promise((resolve, reject) => {
      this.db.query(query, (err, results) => {
        if (err) {
          return reject(err);
        }
        console.log(query);
        resolve(results);
      });
    });
  }

  public getById(id: string, req: Request) {
    this.useDatabase(this.db, req);

    const query = "SELECT * FROM technology WHERE id=?";
    return new Promise((resolve, reject) => {
      this.db.query(query, id, (err, results: any) => {
        if (err) {
          return reject(err);
        }
        console.log(query);
        resolve(results[0]);
      });
    });
  }
}
