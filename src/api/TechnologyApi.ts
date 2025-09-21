import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { Express, Request, Response } from "express";
import { GenericApi } from "@api/GenericApi";
import { TechnologyVersionRepository } from "@repo/TechnologyVersion.repository";
import { TechnologyRepository } from "@repo/Technology.repository";
import { TechnologyService } from "@service/Technology.service";
import { TechnologyController } from "@controller/Technology.controller";

export class TechnologyApi extends GenericApi {
  public repoTechnologyVersion: TechnologyVersionRepository;
  public repo: TechnologyRepository;
  public service: TechnologyService;
  public controller: TechnologyController;

  constructor(private db: Connection) {
    super();
    this.repoTechnologyVersion = new TechnologyVersionRepository(db);
    this.repo = new TechnologyRepository(db, this.repoTechnologyVersion);
    this.service = new TechnologyService(this.repo);
    this.controller = new TechnologyController(this.service);
  }

  public defineGets(apiBasePath: string, app: Express) {
    app.get(`${apiBasePath}/technology`, (req: Request, res: Response) => {
      let id: string | null = req.query.id
        ? typeof req.query.id == "string"
          ? req.query.id
          : null
        : null;
      if (id) {
        this.controller.getTechnologyById(req, res);
      } else {
        this.controller.getTechnologies(req, res);
      }
    });
  }
}
