import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { Express, Request, Response } from "express";
import { GenericApi } from "@api/GenericApi";
import { TechnologyVersionRepository } from "src/repository/TechnologyVersion.repository";
import { TechnologyVersionService } from "src/service/TechnologyVersion.service";
import { TechnologyVersionController } from "src/controller/TechnologyVersion.controller";

export class TechnologyVersionApi extends GenericApi {
  public repo: TechnologyVersionRepository;
  public service: TechnologyVersionService;
  public controller: TechnologyVersionController;

  constructor(private db: Connection) {
    super();
    this.repo = new TechnologyVersionRepository(db);
    this.service = new TechnologyVersionService(this.repo);
    this.controller = new TechnologyVersionController(this.service);
  }

  public defineGets(apiBasePath: string, app: Express) {
    app.get(
      `${apiBasePath}/technology_version`,
      (req: Request, res: Response) => {
        let id: string | null = req.query.id
          ? typeof req.query.id == "string"
            ? req.query.id
            : null
          : null;
        let id_technology: string | null = req.query.id_technology
          ? typeof req.query.id_technology == "string"
            ? req.query.id_technology
            : null
          : null;
        if (id) {
          this.controller.getTechnologyVersionById(req, res);
        } else if (id_technology) {
          this.controller.getTechnologyVersionsByIdTechnology(req, res);
        } else {
          this.controller.getTechnologyVersions(req, res);
        }
      }
    );
  }
}
