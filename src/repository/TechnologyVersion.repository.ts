import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { Request } from "express";
import { GenericRepository } from "./Generic.repository";

export class TechnologyVersionRepository extends GenericRepository {
  constructor(private db: Connection) {
    super();
  }

  public getAll(req: Request) {
    this.useDatabase(this.db, req);

    const query = "SELECT * FROM technology_version";
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

    const query = "SELECT * FROM technology_version WHERE id=?";
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

  public getByIdTechnology(id_technology: string, req: Request) {
    this.useDatabase(this.db, req);

    const query = "SELECT * FROM technology_version WHERE id_technology=?";
    return new Promise((resolve, reject) => {
      this.db.query(query, id_technology, (err, results: any) => {
        if (err) {
          return reject(err);
        }
        console.log(query);
        resolve(results);
      });
    });
  }
}
