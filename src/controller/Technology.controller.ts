import { Request, Response } from "express";
import { TechnologyService } from "@service/Technology.service";

export class TechnologyController {
  constructor(private service: TechnologyService) {}

  async getTechnologies(req: Request, res: Response) {
    try {
      const dependencies: boolean = req.query.dependencies
        ? typeof req.query.dependencies == "string"
          ? req.query.dependencies == "true"
          : false
        : false;
      const results = await this.service.getAll(req, dependencies);

      res.status(200).json(results);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: String(err) });
      }
    }
  }

  async getTechnologyById(req: Request, res: Response) {
    try {
      const id: string | null = req.query.id
        ? typeof req.query.id == "string"
          ? req.query.id
          : null
        : null;
      const dependencies: boolean = req.query.dependencies
        ? typeof req.query.dependencies == "string"
          ? req.query.dependencies == "true"
          : false
        : false;

      let results = null;
      if (id) {
        results = await this.service.getById(req, id, dependencies);
      }
      res.status(200).json(results);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: String(err) });
      }
    }
  }
}
